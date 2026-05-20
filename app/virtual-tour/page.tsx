import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

const TourViewer = dynamic(() => import("@/components/virtual-tour/TourViewer"), {
  ssr: false,
  loading: () => (
    <div className="rounded-card border border-border bg-card-bg p-6 text-muted-text shadow-soft">
      Loading the 360° viewer...
    </div>
  )
});

export const metadata: Metadata = createMetadata({
  title: "360° Clinic Tour | Aya Dental Studio",
  description:
    "Preview Aya Dental Studio with a lazy-loaded 360° clinic tour placeholder prepared for one optimized reception image.",
  path: "/virtual-tour"
});

export default function VirtualTourPage() {
  return (
    <>
      <PageHero
        eyebrow="360° tour"
        title="Preview the clinic environment."
        description="This page is prepared for one optimized equirectangular image. The viewer is lazy-loaded and kept away from the homepage bundle."
      />
      <section className="section-padding bg-background">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_0.45fr]">
          <TourViewer imageSrc="/virtual-tour/clinic-360-placeholder.svg" />
          <Card variant="highlight">
            <h2 className="text-2xl font-semibold text-charcoal">Production notes</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-text">
              <li>Staff consent is required before going live.</li>
              <li>No patients may be visible without written consent.</li>
              <li>Reception or waiting area is preferred for v1.</li>
              <li>Treatment room imagery must be clean, staged, and not intimidating.</li>
              <li>Image must be optimized as JPEG, about 8 MB maximum.</li>
            </ul>
          </Card>
        </div>
      </section>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "360° Tour", path: "/virtual-tour" }
        ])}
      />
    </>
  );
}
