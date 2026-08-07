type TurnstileResponse = {
  success?: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

export type TurnstileVerification = {
  success: boolean;
  status: "verified" | "invalid" | "unavailable";
  message: string;
};

type VerifyTurnstileOptions = {
  token: string;
  expectedAction: "appointment" | "contact";
  remoteIp?: string;
};

const siteverifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

function allowedTurnstileHostnames() {
  return new Set(
    (process.env.TURNSTILE_ALLOWED_HOSTNAMES || "")
      .split(",")
      .map((hostname) => hostname.trim().toLowerCase())
      .filter(Boolean)
  );
}

export async function verifyTurnstileToken({
  token,
  expectedAction,
  remoteIp
}: VerifyTurnstileOptions): Promise<TurnstileVerification> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  const allowedHostnames = allowedTurnstileHostnames();

  if (!secret || allowedHostnames.size === 0) {
    return {
      success: false,
      status: "unavailable",
      message: "Online verification is temporarily unavailable. Please call or use WhatsApp."
    };
  }

  if (!token || token.length > 2048) {
    return {
      success: false,
      status: "invalid",
      message: "Please complete the verification and try again."
    };
  }

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  if (remoteIp) {
    formData.append("remoteip", remoteIp);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const response = await fetch(siteverifyUrl, {
      method: "POST",
      body: formData,
      cache: "no-store",
      signal: controller.signal
    });

    if (!response.ok) {
      return {
        success: false,
        status: "unavailable",
        message: "Online verification is temporarily unavailable. Please try again shortly."
      };
    }

    const result = (await response.json()) as TurnstileResponse;
    const hostname = result.hostname?.toLowerCase();
    const hostnameAllowed = hostname ? allowedHostnames.has(hostname) : false;
    const actionMatches = result.action === expectedAction;

    if (result.success !== true || !hostnameAllowed || !actionMatches) {
      return {
        success: false,
        status: "invalid",
        message: "Please complete the verification and try again."
      };
    }

    return { success: true, status: "verified", message: "Verified." };
  } catch {
    return {
      success: false,
      status: "unavailable",
      message: "Online verification is temporarily unavailable. Please try again shortly."
    };
  } finally {
    clearTimeout(timeout);
  }
}
