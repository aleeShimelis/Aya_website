import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { getRequestKey, checkRateLimit } from "@/lib/rate-limit";
import { sendFormNotification, verifyTurnstileToken } from "@/lib/security";
import { contactSchema } from "@/lib/validation";

function fieldErrors(error: ZodError) {
  return Object.fromEntries(
    Object.entries(error.flatten().fieldErrors).map(([key, value]) => [key, value?.[0] || "Invalid value."])
  );
}

export async function POST(request: Request) {
  const limit = checkRateLimit(getRequestKey(request, "contact"));

  if (!limit.allowed) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const parsed = contactSchema.parse(body);
    const verification = await verifyTurnstileToken(parsed.turnstileToken);

    if (!verification.success) {
      return NextResponse.json({ ok: false, message: verification.message }, { status: 400 });
    }

    await sendFormNotification("Aya Dental Studio contact message", {
      name: parsed.fullName,
      phone: parsed.phone,
      preferredContact: parsed.preferredContact,
      message: parsed.message
    });

    return NextResponse.json({
      ok: true,
      message: "Your message has been received. Clinic staff should follow up soon."
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please review the highlighted fields.",
          errors: fieldErrors(error)
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { ok: false, message: "We could not submit the form. Please try again." },
      { status: 500 }
    );
  }
}
