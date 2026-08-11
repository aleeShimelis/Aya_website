import { CareDirectory } from "@/components/sections/CareDirectory";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesPreview() {
  return (
    <section className="service-preview-section section-padding bg-muted-bg">
      <div className="container-site">
        <SectionHeading
          eyebrow="Dental services"
          title="Care grouped around patient needs."
          description="Services are organized by the kind of care patients may be looking for, while each treatment page keeps its consultation-led explanation."
        />
        <CareDirectory className="mt-10" />
      </div>
    </section>
  );
}
