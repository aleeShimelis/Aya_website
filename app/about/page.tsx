import type { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Aya Dental Studio | Dental Clinic in Addis Ababa",
  description:
    "Learn about Aya Dental Studio, a calm and patient-first dental clinic near Bole Atlas in Addis Ababa.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the clinic"
        title="Designed for calm, transparent dental care."
        description="Aya Dental Studio brings coordinated specialist dental care to Bole Atlas, with clear consultations and a calm clinical environment."
      />
      <section className="section-padding bg-background">
        <div className="container-site grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-stretch">
          <div className="relative min-h-[30rem] overflow-hidden rounded-card border border-border lg:min-h-[44rem]">
            <Image
              src="/images/about/clinic-interior.jpg"
              alt="Interior of Aya Dental Studio"
              fill
              sizes="(min-width: 1024px) 65vw, 100vw"
              quality={90}
              className="object-cover"
            />
          </div>
          <div className="space-y-5">
            <Card>
              <h2 className="text-2xl font-semibold text-charcoal">Clinic values</h2>
              <p className="mt-3 text-muted-text">
                The site should present care as careful, clear, and human. Treatment decisions
                should be explained in plain language and confirmed through consultation.
              </p>
            </Card>
            <Card>
              <h2 className="text-2xl font-semibold text-charcoal">Team information</h2>
              <p className="mt-3 text-muted-text">
                Care is led by Dr. Aymen Ayoub alongside Dr. Ismael Muze and Dr. Tewodros Molla,
                bringing together expertise in endodontics, cosmetic dentistry, orthodontics, and
                maxillofacial surgery.
              </p>
            </Card>
            <Card>
              <h2 className="text-2xl font-semibold text-charcoal">Clinic environment</h2>
              <p className="mt-3 text-muted-text">
                The clinic gallery shows Aya Dental Studio&apos;s reception, patient areas, treatment
                rooms, equipment, team, and location. Patient-identifiable media is published only
                with appropriate consent.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <FinalCta />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
    </>
  );
}
