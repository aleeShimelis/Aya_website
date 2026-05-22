import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { contactActions } from "@/lib/constants";

export function Hero() {
  return (
    <section className="hero-section border-b border-border">
      <div className="container-site hero-grid grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        <div className="hero-copy lg:col-span-5 xl:col-span-5">
          <p className="eyebrow mb-4">Aya Dental Studio - Bole Atlas</p>
          <h1 className="hero-title font-serif text-4xl font-semibold leading-tight text-charcoal md:text-5xl xl:text-6xl">
            A calmer dental visit starts here in Addis Ababa.
          </h1>
          <p className="prose-width mt-6 text-lg leading-8 text-muted-text">
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
          <p className="mt-5 text-sm font-medium leading-6 text-muted-text">
            Bole Atlas, Addis Ababa <span aria-hidden="true">&middot;</span> Clear treatment
            planning <span aria-hidden="true">&middot;</span> Patient-first care
          </p>
        </div>
        <div className="hero-media lg:col-span-7 xl:col-span-7">
          {/* TODO: Replace this composed placeholder with an approved real clinic/reception photo. */}
          <div
            className="hero-media-frame"
            role="img"
            aria-label="Approved Aya Dental Studio reception or clinic environment photo placeholder"
          >
            <div className="hero-media-room" aria-hidden="true">
              <span className="hero-room-window" />
              <span className="hero-room-desk" />
              <span className="hero-room-accent" />
            </div>
          </div>
          <aside className="hero-media-note" aria-label="Hero media launch note">
            <p className="text-sm font-semibold text-charcoal">Inside Aya Dental Studio</p>
            <p className="mt-1 text-xs leading-5 text-muted-text">
              Reception and clinic preview prepared for launch
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
