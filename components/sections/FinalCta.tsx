import { CalendarCheck, MapPin, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { contactActions } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site">
        <Card variant="highlight" className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-charcoal md:text-4xl">
              Request a visit or ask the clinic a question.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-text">
              Choose the contact method that feels easiest. Appointment requests should be
              confirmed by clinic staff before your visit.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <ButtonLink href="/contact">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </ButtonLink>
            <ButtonLink href={contactActions.callPrimary} variant="secondary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call
            </ButtonLink>
            <ButtonLink href={contactActions.whatsapp} variant="teal">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </ButtonLink>
            <ButtonLink href={contactActions.map} variant="secondary">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Map
            </ButtonLink>
          </div>
        </Card>
      </div>
    </section>
  );
}
