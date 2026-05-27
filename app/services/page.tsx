import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { getServicesForGroup, serviceGroups } from "@/content/service-groups";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Dental Services in Addis Ababa | Aya Dental Studio",
  description:
    "Explore teeth whitening, dental implants, root canal treatment, cleaning, fillings, crowns, bridges, orthodontics, and extraction services.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Dental services with clear explanations."
        description="Browse the main care areas prepared for Aya Dental Studio. Every service should be confirmed through assessment and a personalized plan."
        ctaLabel="Request Appointment"
        ctaHref="/contact"
      />
      <section className="service-preview-section section-padding bg-background">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {serviceGroups.map((group) => (
            <Card key={group.title} className="service-card flex h-full flex-col gap-5 p-5 lg:p-6">
              <div
                className="service-card-media flex items-center justify-center text-teal"
                role="img"
                aria-label={`${group.title} image placeholder`}
              >
                <ImageIcon className="h-8 w-8" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-charcoal">{group.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-text">{group.description}</p>
              </div>
              <div className="space-y-3">
                {getServicesForGroup(group).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex min-h-11 items-center justify-between gap-3 rounded-md border border-border bg-muted-bg px-4 py-3 text-sm font-semibold text-charcoal transition hover:border-teal hover:bg-teal-light hover:text-teal focus-visible:border-teal"
                  >
                    <span>{service.title}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
      <FinalCta />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" }
        ])}
      />
    </>
  );
}
