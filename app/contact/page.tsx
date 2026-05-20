import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { contactActions, siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Contact Aya Dental Studio | Dental Clinic in Bole Atlas",
  description:
    "Request an appointment, call, WhatsApp, or find Aya Dental Studio near Bole Atlas in Addis Ababa.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a visit or ask a question."
        description="Choose the contact method that feels easiest. Please avoid sending detailed medical history through the forms."
      />
      <section className="section-padding bg-background">
        <div className="container-site grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <Card>
              <h2 className="text-2xl font-semibold text-charcoal">Clinic contact</h2>
              <div className="mt-5 space-y-3 text-muted-text">
                <a className="flex items-center gap-3 hover:text-teal" href={contactActions.callPrimary}>
                  <Phone className="h-5 w-5 text-teal" aria-hidden="true" />
                  {siteConfig.phonePrimaryDisplay}
                </a>
                <a className="flex items-center gap-3 hover:text-teal" href={contactActions.whatsapp}>
                  <MessageCircle className="h-5 w-5 text-teal" aria-hidden="true" />
                  WhatsApp
                </a>
                <a className="flex items-start gap-3 hover:text-teal" href={contactActions.map}>
                  <MapPin className="mt-1 h-5 w-5 text-teal" aria-hidden="true" />
                  <span>{siteConfig.addressFull}</span>
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={contactActions.callPrimary} variant="secondary">
                  Call
                </ButtonLink>
                <ButtonLink href={contactActions.whatsapp} variant="teal">
                  WhatsApp
                </ButtonLink>
              </div>
            </Card>
            <Card className="overflow-hidden p-0">
              <iframe
                title="Map to Aya Dental Studio location placeholder"
                src={siteConfig.mapEmbedUrl}
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </div>
          <div className="grid gap-6">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-charcoal">
                Appointment request
              </h2>
              <p className="mt-3 text-muted-text">
                Appointment requests are reviewed by the clinic team. For urgent concerns, please
                call directly. Staff should confirm availability before your appointment is final.
              </p>
            </div>
            <AppointmentForm />
            <div>
              <h2 className="font-serif text-3xl font-semibold text-charcoal">General message</h2>
              <p className="mt-3 text-muted-text">For non-urgent questions that do not need a full appointment request.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ])}
      />
    </>
  );
}
