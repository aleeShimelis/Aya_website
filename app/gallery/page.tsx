import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gallery | Aya Dental Studio",
  description:
    "Explore the reception, treatment rooms, equipment, team, and location of Aya Dental Studio in Addis Ababa.",
  path: "/gallery"
});

const galleryItems = [
  {
    src: "/images/gallery/reception-area.jpg",
    alt: "Reception area at Aya Dental Studio"
  },
  {
    src: "/images/gallery/waiting-area.jpg",
    alt: "Patient waiting area at Aya Dental Studio"
  },
  {
    src: "/images/gallery/treatment-room.jpg",
    alt: "Dental treatment room at Aya Dental Studio"
  },
  {
    src: "/images/gallery/equipment-detail.jpg",
    alt: "Dental equipment used at Aya Dental Studio"
  },
  {
    src: "/images/gallery/team-portrait.jpg",
    alt: "Aya Dental Studio clinical team"
  },
  {
    src: "/images/gallery/exterior-landmark.jpg",
    alt: "Exterior and location of Aya Dental Studio"
  }
] as const;

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A closer look inside Aya Dental Studio."
        description="Explore the clinic environment, treatment spaces, equipment, team, and Bole Atlas location before your visit."
      />
      <section className="section-padding bg-background">
        <GalleryGrid items={galleryItems} />
      </section>
    </>
  );
}
