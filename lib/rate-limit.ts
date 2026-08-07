import { createHmac } from "node:crypto";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export type RateLimitNamespace = "appointment" | "contact";

export type RateLimitResult = {
  allowed: boolean;
  status: "allowed" | "limited" | "unavailable";
  remaining: number;
  resetAt: number;
};

type RateLimitClients = Record<RateLimitNamespace, Ratelimit>;

let clients: RateLimitClients | null = null;

function getRateLimitClients() {
  if (clients) {
    return clients;
  }

  const url = process.env.RATE_LIMIT_REDIS_REST_URL?.trim();
  const token = process.env.RATE_LIMIT_REDIS_REST_TOKEN?.trim();

  if (!url || !token) {
    return null;
  }

  const redis = new Redis({ url, token });
  const createLimiter = (namespace: RateLimitNamespace) =>
    new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      prefix: `aya:ratelimit:${namespace}`,
      analytics: true,
      timeout: 1_500
    });

  clients = {
    appointment: createLimiter("appointment"),
    contact: createLimiter("contact")
  };

  return clients;
}

export function getClientIp(request: Request) {
  const trustedHeader = process.env.RATE_LIMIT_IP_HEADER?.trim().toLowerCase();

  if (trustedHeader === "cf-connecting-ip") {
    return request.headers.get("cf-connecting-ip")?.trim() || "";
  }

  if (trustedHeader === "x-real-ip") {
    return request.headers.get("x-real-ip")?.trim() || "";
  }

  if (trustedHeader === "x-forwarded-for") {
    return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
  }

  return "";
}

function getPrivateIdentifier(request: Request, namespace: RateLimitNamespace) {
  const hashSecret = process.env.RATE_LIMIT_HASH_SECRET?.trim();
  const clientIp = getClientIp(request);

  if (!hashSecret || !clientIp) {
    return null;
  }

  const digest = createHmac("sha256", hashSecret).update(clientIp).digest("hex");
  return `${namespace}:${digest}`;
}

export async function checkRateLimit(
  request: Request,
  namespace: RateLimitNamespace
): Promise<RateLimitResult> {
  const rateLimitClients = getRateLimitClients();
  const identifier = getPrivateIdentifier(request, namespace);

  if (!rateLimitClients || !identifier) {
    return {
      allowed: false,
      status: "unavailable",
      remaining: 0,
      resetAt: Date.now()
    };
  }

  try {
    const result = await rateLimitClients[namespace].limit(identifier);
    return {
      allowed: result.success,
      status: result.success ? "allowed" : "limited",
      remaining: result.remaining,
      resetAt: result.reset
    };
  } catch {
    return {
      allowed: false,
      status: "unavailable",
      remaining: 0,
      resetAt: Date.now()
    };
  }
}
