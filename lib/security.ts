export async function verifyTurnstileToken(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return {
      success: true,
      skipped: true,
      message: "Turnstile verification is configured as a production placeholder."
    };
  }

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData
  });

  if (!response.ok) {
    return { success: false, skipped: false, message: "Bot verification failed." };
  }

  const result = (await response.json()) as { success?: boolean };
  return {
    success: result.success === true,
    skipped: false,
    message: result.success ? "Verified." : "Bot verification failed."
  };
}

export async function sendFormNotification(subject: string, payload: Record<string, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return {
      sent: false,
      skipped: true,
      message: "Email provider is configured as a production placeholder."
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Aya Dental Studio <forms@ayadentalstudio.com>",
      to: [toEmail],
      subject,
      text: Object.entries(payload)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n")
    })
  });

  return {
    sent: response.ok,
    skipped: false,
    message: response.ok ? "Notification queued." : "Email provider rejected the request."
  };
}
