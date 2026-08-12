import { z } from "zod";
import { sanitizeText } from "@/lib/utils";
import { services } from "@/content/services";

const serviceValues = services.map((service) => service.slug) as [string, ...string[]];

const textField = z
  .string()
  .transform(sanitizeText)
  .pipe(
    z
      .string()
      .min(2, "Please enter at least 2 characters.")
      .max(120, "Please keep this under 120 characters.")
  );

const phoneField = z
  .string()
  .transform(sanitizeText)
  .pipe(
    z
      .string()
      .min(7, "Please enter a valid phone number.")
      .max(30, "Please keep this under 30 characters.")
      .regex(/^[+0-9\s()-]+$/, "Please use a valid phone number.")
  );

const messageField = z
  .string()
  .transform(sanitizeText)
  .pipe(z.string().max(500, "Please keep your message under 500 characters."))
  .optional()
  .or(z.literal(""));

function validCalendarDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

const clinicDateFormatter = new Intl.DateTimeFormat("en", {
  timeZone: "Africa/Addis_Ababa",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
});

function clinicToday() {
  const parts = Object.fromEntries(
    clinicDateFormatter
      .formatToParts(new Date())
      .filter(({ type }) => type === "year" || type === "month" || type === "day")
      .map(({ type, value }) => [type, value])
  );

  return `${parts.year}-${parts.month}-${parts.day}`;
}

function isTodayOrLater(value: string) {
  return value >= clinicToday();
}

const appointmentDateField = z
  .string()
  .trim()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date.")
  .refine(validCalendarDate, "Please enter a valid date.")
  .refine(isTodayOrLater, "Please choose today or a future date.");

export const appointmentSchema = z.object({
  fullName: textField,
  phone: phoneField,
  preferredContact: z.enum(["phone", "whatsapp"], {
    required_error: "Please choose how we should contact you."
  }),
  service: z.enum(serviceValues, {
    required_error: "Please choose a service."
  }),
  preferredDate: appointmentDateField,
  message: messageField,
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm that you agree to the privacy notice." })
  }),
  turnstileToken: z.string().trim().min(1, "Bot protection is required.").max(2048)
});

export const contactSchema = z.object({
  fullName: textField,
  phone: phoneField,
  preferredContact: z.enum(["phone", "whatsapp"], {
    required_error: "Please choose how we should contact you."
  }),
  message: z
    .string()
    .transform(sanitizeText)
    .pipe(
      z
        .string()
        .min(5, "Please enter a short message.")
        .max(500, "Please keep your message under 500 characters.")
    ),
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm that you agree to the privacy notice." })
  }),
  turnstileToken: z.string().trim().min(1, "Bot protection is required.").max(2048)
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
