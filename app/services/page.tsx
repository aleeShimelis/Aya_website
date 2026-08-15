import type { Metadata } from "next";
import { CareDirectory } from "@/components/sections/CareDirectory";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Dental Services in Addis Ababa | Aya Dental Studio",
  description:
    "Explore teeth whitening, implants, root canal treatment, cleaning, restorative care, orthodontics, extraction, and maxillofacial surgery.",
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
        <div className="container-site">
          <CareDirectory detailed />
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
