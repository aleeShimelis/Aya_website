import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { services } from "@/content/services";
import { deliverFormNotification } from "@/lib/form-delivery";
import { FormRequestError, readFormJson } from "@/lib/form-request";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { verifyTurnstileToken } from "@/lib/security";
import { appointmentSchema } from "@/lib/validation";
import { formatDateForDisplay } from "@/lib/utils";

function fieldErrors(error: ZodError) {
  return Object.fromEntries(
    Object.entries(error.flatten().fieldErrors).map(([key, value]) => [key, value?.[0] || "Invalid value."])
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await readFormJson(request);
  } catch (error) {
    if (error instanceof FormRequestError) {
      return NextResponse.json(
        { ok: false, message: error.message },
        { status: error.status, headers: { "Cache-Control": "no-store" } }
      );
    }

    return NextResponse.json(
      { ok: false, message: "We could not submit the form. Please try again." },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const limit = await checkRateLimit(request, "appointment");

  if (limit.status === "unavailable") {
    return NextResponse.json(
      {
        ok: false,
        message: "Online requests are temporarily unavailable. Please call or use WhatsApp."
      },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }

  if (!limit.allowed) {
    const retryAfter = Math.max(1, Math.ceil((limit.resetAt - Date.now()) / 1000));
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please wait a moment and try again." },
      {
        status: 429,
        headers: {
          "Cache-Control": "no-store",
          "Retry-After": String(retryAfter),
          "X-RateLimit-Remaining": String(limit.remaining)
        }
      }
    );
  }

  let parsed: ReturnType<typeof appointmentSchema.parse>;

  try {
    parsed = appointmentSchema.parse(body);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please review the highlighted fields.",
          errors: fieldErrors(error)
        },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }

    return NextResponse.json(
      { ok: false, message: "We could not submit the form. Please try again." },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    const verification = await verifyTurnstileToken({
      token: parsed.turnstileToken,
      expectedAction: "appointment",
      remoteIp: getClientIp(request)
    });

    if (!verification.success) {
      return NextResponse.json(
        { ok: false, message: verification.message },
        {
          status: verification.status === "unavailable" ? 503 : 400,
          headers: { "Cache-Control": "no-store" }
        }
      );
    }

    const service = services.find((item) => item.slug === parsed.service);

    const submissionId = randomUUID();
    const delivery = await deliverFormNotification({
      subject: "Aya Dental Studio appointment request",
      idempotencyKey: `appointment/${submissionId}`,
      fields: [
        { label: "Reference", value: submissionId },
        { label: "Name", value: parsed.fullName },
        { label: "Phone", value: parsed.phone },
        { label: "Preferred contact", value: parsed.preferredContact },
        { label: "Service", value: service?.title || parsed.service },
        { label: "Preferred date", value: formatDateForDisplay(parsed.preferredDate) },
        { label: "Message", value: parsed.message || "No message provided" }
      ]
    });

    if (!delivery.accepted) {
      return NextResponse.json(
        {
          ok: false,
          message: "We could not deliver your request. Please call or use WhatsApp instead."
        },
        {
          status: delivery.status === "rejected" ? 502 : 503,
          headers: { "Cache-Control": "no-store" }
        }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message:
          "Your request has been received. Clinic staff should confirm availability before your visit.",
        confirmation: {
          fullName: parsed.fullName,
          phone: parsed.phone,
          preferredContact: parsed.preferredContact,
          service: service?.title || parsed.service,
          preferredDate: parsed.preferredDate
        }
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json(
      { ok: false, message: "We could not submit the form. Please try again." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
