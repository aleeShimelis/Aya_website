"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SelectInput, TextArea, TextInput } from "@/components/forms/FormField";
import {
  TurnstileWidget,
  type TurnstileWidgetHandle
} from "@/components/forms/TurnstileWidget";
import { services } from "@/content/services";
import { siteConfig } from "@/lib/constants";
import { formatDateForDisplay } from "@/lib/utils";

type FieldErrors = Partial<Record<string, string>>;

type Confirmation = {
  fullName: string;
  phone: string;
  preferredContact: string;
  service: string;
  preferredDate: string;
};

const serviceOptions = [
  { value: "", label: "Select a service" },
  ...services.map((service) => ({ value: service.slug, label: service.title }))
];

export function AppointmentForm() {
  const turnstileRef = useRef<TurnstileWidgetHandle>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      phone: String(formData.get("phone") || ""),
      preferredContact: String(formData.get("preferredContact") || ""),
      service: String(formData.get("service") || ""),
      preferredDate: String(formData.get("preferredDate") || ""),
      message: String(formData.get("message") || ""),
      privacyConsent: formData.get("privacyConsent") === "on",
      turnstileToken
    };

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as {
        ok: boolean;
        message?: string;
        errors?: FieldErrors;
        confirmation?: Confirmation;
      };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setErrors(result.errors || {});
        setMessage(result.message || "Please review the form and try again.");
        return;
      }

      if (!result.confirmation) {
        setStatus("error");
        setMessage("We received an unexpected response. Please call or use WhatsApp instead.");
        return;
      }

      setStatus("success");
      setMessage(result.message || "Your appointment request has been received.");
      setConfirmation(result.confirmation);
      form.reset();
    } catch {
      setStatus("error");
      setMessage("We could not send your request. Please call or use WhatsApp instead.");
    } finally {
      setTurnstileToken("");
      turnstileRef.current?.reset();
    }
  }

  if (status === "success" && confirmation) {
    return (
      <div className="print-confirmation rounded-card border border-border bg-card-bg p-6 shadow-soft">
        <p className="eyebrow">Appointment request received</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-charcoal">
          Thank you, {confirmation.fullName}.
        </h2>
        <p className="mt-4 text-muted-text">{message}</p>
        <dl className="mt-6 grid gap-4 text-sm md:grid-cols-2">
          <div>
            <dt className="font-semibold text-charcoal">Preferred service</dt>
            <dd className="mt-1 text-muted-text">{confirmation.service}</dd>
          </div>
          <div>
            <dt className="font-semibold text-charcoal">Preferred date</dt>
            <dd className="mt-1 text-muted-text">
              {formatDateForDisplay(confirmation.preferredDate)}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-charcoal">Phone</dt>
            <dd className="mt-1 text-muted-text">{confirmation.phone}</dd>
          </div>
          <div>
            <dt className="font-semibold text-charcoal">Preferred contact</dt>
            <dd className="mt-1 text-muted-text">{confirmation.preferredContact}</dd>
          </div>
        </dl>
        <div className="mt-6 rounded-card bg-muted-bg p-4 text-sm text-muted-text">
          <p className="font-semibold text-charcoal">Next step</p>
          <p className="mt-1">
            Clinic staff should confirm the appointment before your visit. Location placeholder:
            {" "}
            {siteConfig.addressFull}.
          </p>
        </div>
        <div className="no-print mt-6 flex flex-wrap gap-3">
          <Button type="button" variant="secondary" onClick={() => window.print()}>
            <Printer className="h-4 w-4" aria-hidden="true" />
            Print Confirmation
          </Button>
          <Button type="button" onClick={() => setStatus("idle")}>
            Request Another Appointment
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="rounded-card border border-border bg-card-bg p-6 shadow-soft" onSubmit={handleSubmit}>
      <div className="grid gap-5">
        <TextInput
          label="Full name"
          name="fullName"
          autoComplete="name"
          required
          error={errors.fullName}
        />
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
        <SelectInput
          label="Service"
          name="service"
          required
          error={errors.service}
          options={serviceOptions}
        />
        <TextInput
          label="Preferred date"
          name="preferredDate"
          type="date"
          required
          error={errors.preferredDate}
        />
        <TextArea
          label="Short message"
          name="message"
          maxLength={500}
          rows={4}
          hint="Please keep this brief. Do not include detailed medical history in this form."
          error={errors.message}
        />
        <TurnstileWidget
          ref={turnstileRef}
          action="appointment"
          onTokenChange={setTurnstileToken}
        />
        <label className="flex items-start gap-3 text-sm text-muted-text">
          <input
            name="privacyConsent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 rounded-sm border-border text-teal focus:ring-teal"
          />
          <span>
            I agree to the privacy notice and understand this form should not include detailed
            medical history.
          </span>
        </label>
        {errors.privacyConsent ? (
          <p className="text-sm font-semibold text-error">{errors.privacyConsent}</p>
        ) : null}
        {message ? (
          <p className="rounded-card bg-muted-bg p-4 text-sm font-semibold text-error">{message}</p>
        ) : null}
        <Button type="submit" disabled={status === "submitting" || !turnstileToken}>
          {status === "submitting" ? "Sending..." : "Request Appointment"}
        </Button>
      </div>
    </form>
  );
}
