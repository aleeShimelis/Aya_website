export type FormDeliveryResult = {
  accepted: boolean;
  status: "accepted" | "rejected" | "unavailable";
  providerMessageId?: string;
};

type FormDeliveryRequest = {
  subject: string;
  fields: Array<{ label: string; value: string }>;
  idempotencyKey: string;
};

type ResendResponse = {
  id?: string;
};

export async function deliverFormNotification({
  subject,
  fields,
  idempotencyKey
}: FormDeliveryRequest): Promise<FormDeliveryResult> {
  const provider = process.env.FORM_DELIVERY_PROVIDER?.trim().toLowerCase();

  if (provider !== "resend") {
    return { accepted: false, status: "unavailable" };
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL?.trim();
  const fromEmail = process.env.FORM_FROM_EMAIL?.trim();

  if (!apiKey || !toEmail || !fromEmail) {
    return { accepted: false, status: "unavailable" };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject,
        text: fields.map(({ label, value }) => `${label}: ${value}`).join("\n")
      }),
      cache: "no-store",
      signal: controller.signal
    });

    if (!response.ok) {
      return { accepted: false, status: "rejected" };
    }

    const result = (await response.json()) as ResendResponse;
    return {
      accepted: true,
      status: "accepted",
      providerMessageId: result.id
    };
  } catch {
    return { accepted: false, status: "unavailable" };
  } finally {
    clearTimeout(timeout);
  }
}
