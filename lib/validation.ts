import { z } from "zod";
import { sanitizeText } from "@/lib/utils";
import { services } from "@/content/services";

const serviceValues = services.map((service) => service.slug) as [string, ...string[]];

const textField = z
  .string()
  .trim()
  .min(2, "Please enter at least 2 characters.")
  .max(120, "Please keep this under 120 characters.")
  .transform(sanitizeText);

const phoneField = z
  .string()
  .trim()
  .min(7, "Please enter a valid phone number.")
  .max(30, "Please keep this under 30 characters.")
  .regex(/^[+0-9\s()-]+$/, "Please use a valid phone number.")
  .transform(sanitizeText);

const messageField = z
  .string()
  .trim()
  .max(500, "Please keep your message under 500 characters.")
  .transform(sanitizeText)
  .optional()
  .or(z.literal(""));

export const appointmentSchema = z.object({
  fullName: textField,
  phone: phoneField,
  preferredContact: z.enum(["phone", "whatsapp"], {
    required_error: "Please choose how we should contact you."
  }),
  service: z.enum(serviceValues, {
    required_error: "Please choose a service."
  }),
  preferredDate: z
    .string()
    .trim()
    .min(1, "Please choose a preferred date.")
    .max(20, "Please enter a valid date.")
    .transform(sanitizeText),
  message: messageField,
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm that you agree to the privacy notice." })
  }),
  turnstileToken: z.string().trim().min(1, "Bot protection is required.").max(4096)
});

export const contactSchema = z.object({
  fullName: textField,
  phone: phoneField,
  preferredContact: z.enum(["phone", "whatsapp"], {
    required_error: "Please choose how we should contact you."
  }),
  message: z
    .string()
    .trim()
    .min(5, "Please enter a short message.")
    .max(500, "Please keep your message under 500 characters.")
    .transform(sanitizeText),
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm that you agree to the privacy notice." })
  }),
  turnstileToken: z.string().trim().min(1, "Bot protection is required.").max(4096)
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
