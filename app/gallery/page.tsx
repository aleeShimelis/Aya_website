import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Card } from "@/components/ui/Card";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gallery | Aya Dental Studio",
  description:
    "Aya Dental Studio gallery placeholders prepared for real clinic photography, staff consent, and patient privacy.",
  path: "/gallery"
});

const galleryItems = [
  "Reception area",
  "Waiting area",
  "Treatment room",
  "Equipment detail",
  "Team portrait",
  "Exterior or landmark"
] as const;

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Prepared for real clinic photography."
        description="This gallery intentionally avoids fake before-and-after images and patient-identifiable media. Real photos should be added only after approval and consent."
      />
      <section className="section-padding bg-background">
        <div className="container-site grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <MediaPlaceholder
              key={item}
              label={`${item} placeholder`}
              note="TODO: replace with real clinic image."
              className="min-h-80"
            />
          ))}
        </div>
        <div className="container-narrow mt-10">
          <Card variant="highlight">
            <h2 className="text-xl font-semibold text-charcoal">Consent note</h2>
            <p className="mt-3 text-muted-text">
              TODO: patient photos, before/after images, and any identifiable media require written
              consent and clinic/legal approval before publication.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
