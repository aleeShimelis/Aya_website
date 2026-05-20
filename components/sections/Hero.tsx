import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { contactActions } from "@/lib/constants";

export function Hero() {
  return (
    <section className="hero-section border-b border-border">
      <div className="container-site hero-grid grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        <div className="hero-copy lg:col-span-5 xl:col-span-5">
          <p className="eyebrow mb-4">Aya Dental Studio - Addis Ababa</p>
          <h1 className="hero-title font-serif text-4xl font-semibold leading-tight text-charcoal md:text-5xl xl:text-6xl">
            Calm, specialist dental care for healthier smiles in Addis Ababa.
          </h1>
          <p className="prose-width mt-6 text-lg leading-8 text-muted-text">
            A premium, patient-first dental clinic experience near Bole Atlas, designed around
            clear explanations, considered treatment planning, and a calmer visit from first
            contact.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </ButtonLink>
            <ButtonLink href={contactActions.callPrimary} variant="secondary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </ButtonLink>
            <ButtonLink href={contactActions.whatsapp} variant="teal">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </ButtonLink>
          </div>
        </div>
        <div className="hero-media lg:col-span-7 xl:col-span-7" role="img" aria-label="Real clinic hero image placeholder">
          <div className="hero-media-visual flex h-full min-h-inherit flex-col justify-end">
            <div className="hero-media-room flex flex-1 items-end p-5 md:p-8">
              <div className="max-w-md rounded-card border border-border bg-card-bg p-5 shadow-soft">
                <p className="font-semibold text-charcoal">Real clinic image placeholder</p>
                <p className="mt-2 text-sm leading-6 text-muted-text">
                  TODO: replace with an approved Aya Dental Studio reception, waiting area, or
                  clinic environment photo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
