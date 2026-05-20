import { View } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function VirtualTourPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <SectionHeading
            eyebrow="360° clinic tour"
            title="Preview the space before your visit."
            description="The homepage keeps this lightweight with a static preview. The full viewer loads only on the dedicated tour page."
          />
          <div className="mt-7">
            <ButtonLink href="/virtual-tour" variant="secondary">
              <View className="h-4 w-4" aria-hidden="true" />
              Start 360° Clinic Tour
            </ButtonLink>
          </div>
        </div>
        <MediaPlaceholder
          label="360° reception preview placeholder"
          note="TODO: use one optimized equirectangular image, with staff consent documented."
          className="min-h-80"
        />
      </div>
    </section>
  );
}
