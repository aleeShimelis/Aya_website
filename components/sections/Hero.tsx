import Image from "next/image";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { contactActions } from "@/lib/constants";

export function Hero() {
  return (
    <section className="hero-section border-b border-border">
      <div className="hero-media">
        <div className="hero-media-frame">
          <Image
            src="/images/hero/aya-reception.jpg"
            alt="Aya Dental Studio reception area"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
        </div>
      </div>
      <div className="container-site hero-grid flex items-center">
        <div className="hero-copy">
          <p className="eyebrow mb-4">Aya Dental Studio - Bole Atlas</p>
          <h1 className="hero-title font-serif text-4xl font-semibold leading-tight text-card-bg md:text-5xl xl:text-6xl">
            A calmer dental visit starts here in Addis Ababa.
          </h1>
          <p className="prose-width mt-6 text-lg leading-8 text-teal-light">
            Aya Dental Studio provides thoughtful, patient-first dental care near Bole Atlas, with
            clear explanations, careful treatment planning, and a calm clinic experience from first
            contact.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact" className="w-full sm:w-auto">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </ButtonLink>
            <ButtonLink
              href={contactActions.callPrimary}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </ButtonLink>
            <ButtonLink
              href={contactActions.whatsapp}
              variant="teal"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm font-medium leading-6 text-teal-light">
            Bole Atlas, Addis Ababa <span aria-hidden="true">&middot;</span> Clear treatment
            planning <span aria-hidden="true">&middot;</span> Patient-first care
          </p>
        </div>
      </div>
    </section>
  );
}
