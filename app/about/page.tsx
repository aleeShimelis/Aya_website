import type { Metadata } from "next";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
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
        description="Aya Dental Studio is prepared as a premium, patient-first clinic experience. Verified clinic story, dentist credentials, and real team photos should be added before launch."
      />
      <section className="section-padding bg-background">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1fr]">
          <MediaPlaceholder
            label="Clinic interior photo placeholder"
            note="TODO: replace with approved real clinic photography."
            className="min-h-96"
          />
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
                TODO: add dentist name, credentials, years of experience, certifications,
                affiliations, languages spoken, and approved team photography.
              </p>
            </Card>
            <Card>
              <h2 className="text-2xl font-semibold text-charcoal">Clinic environment</h2>
              <p className="mt-3 text-muted-text">
                TODO: add real reception, treatment room, equipment, and exterior/location photos.
                Avoid patient-identifiable images without written consent.
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
