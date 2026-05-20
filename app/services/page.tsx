import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { services } from "@/content/services";
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
      <section className="section-padding bg-background">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {services.map((service) => (
            <Card key={service.slug} className="flex h-full flex-col lg:p-7">
              <service.icon className="h-7 w-7 text-teal" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-semibold text-charcoal">{service.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-text">{service.description}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-charcoal"
              >
                View service
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
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
