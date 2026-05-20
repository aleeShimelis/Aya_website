"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { SelectInput, TextArea, TextInput } from "@/components/forms/FormField";

type FieldErrors = Partial<Record<string, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      phone: String(formData.get("phone") || ""),
      preferredContact: String(formData.get("preferredContact") || ""),
      message: String(formData.get("message") || ""),
      privacyConsent: formData.get("privacyConsent") === "on",
      turnstileToken: String(formData.get("turnstileToken") || "development-placeholder")
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = (await response.json()) as {
      ok: boolean;
      message?: string;
      errors?: FieldErrors;
    };

    if (!response.ok || !result.ok) {
      setStatus("error");
      setErrors(result.errors || {});
      setMessage(result.message || "Please review the form and try again.");
      return;
    }

    setStatus("success");
    setMessage(result.message || "Your message has been received.");
    event.currentTarget.reset();
  }

  return (
    <form className="rounded-card border border-border bg-card-bg p-6 shadow-soft" onSubmit={handleSubmit}>
      <div className="grid gap-5">
        <TextInput label="Full name" name="fullName" autoComplete="name" required error={errors.fullName} />
        <TextInput
          label="Phone number"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          error={errors.phone}
        />
        <SelectInput
          label="Preferred contact method"
          name="preferredContact"
          required
          error={errors.preferredContact}
          options={[
            { value: "", label: "Choose one" },
            { value: "phone", label: "Phone call" },
            { value: "whatsapp", label: "WhatsApp" }
          ]}
        />
        <TextArea
          label="Message"
          name="message"
          maxLength={500}
          rows={4}
          required
          hint="Please do not include detailed medical history in this form."
          error={errors.message}
        />
        <input type="hidden" name="turnstileToken" value="development-placeholder" />
        <div className="rounded-card bg-muted-bg p-4 text-sm text-muted-text">
          Cloudflare Turnstile placeholder active. Production must add the public widget and server
          secret before launch.
        </div>
        <label className="flex items-start gap-3 text-sm text-muted-text">
          <input
            name="privacyConsent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 rounded-sm border-border text-teal focus:ring-teal"
          />
          <span>I agree to the privacy notice and understand this is not for emergencies.</span>
        </label>
        {errors.privacyConsent ? (
          <p className="text-sm font-semibold text-error">{errors.privacyConsent}</p>
        ) : null}
        {message ? (
          <p
            className={
              status === "success"
                ? "rounded-card bg-teal-light p-4 text-sm font-semibold text-charcoal"
                : "rounded-card bg-muted-bg p-4 text-sm font-semibold text-error"
            }
          >
            {message}
          </p>
        ) : null}
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
