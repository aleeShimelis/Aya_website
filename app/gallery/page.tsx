import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gallery | Aya Dental Studio",
  description:
    "Aya Dental Studio gallery placeholders prepared for real clinic photography, staff consent, and patient privacy.",
  path: "/gallery"
});

const galleryItems = [
  {
    title: "Reception area",
    src: "/images/gallery/reception-area.jpg",
    alt: "Reception area at Aya Dental Studio"
  },
  {
    title: "Waiting area",
    src: "/images/gallery/waiting-area.jpg",
    alt: "Patient waiting area at Aya Dental Studio"
  },
  {
    title: "Treatment room",
    src: "/images/gallery/treatment-room.jpg",
    alt: "Dental treatment room at Aya Dental Studio"
  },
  {
    title: "Equipment detail",
    src: "/images/gallery/equipment-detail.jpg",
    alt: "Dental equipment used at Aya Dental Studio"
  },
  {
    title: "Team portrait",
    src: "/images/gallery/team-portrait.jpg",
    alt: "Aya Dental Studio clinical team"
  },
  {
    title: "Exterior or landmark",
    src: "/images/gallery/exterior-landmark.jpg",
    alt: "Exterior and location of Aya Dental Studio"
  }
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
           <figure
            key={item.src}
            className="overflow-hidden rounded-card border border-border bg-card-bg"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                quality={90}
                className="object-cover"
              />
            </div>

            <figcaption className="px-5 py-4 font-semibold text-charcoal">
              {item.title}
            </figcaption>
          </figure> 
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
