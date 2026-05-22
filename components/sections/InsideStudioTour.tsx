import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LazyTourViewer } from "@/components/virtual-tour/LazyTourViewer";

const tourImagePath = "/images/virtual-tour/aya-reception-360.jpg";

export function InsideStudioTour() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site grid gap-8 lg:grid-cols-12 lg:items-start xl:gap-10">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Inside the Studio"
            title="Take a 360° look inside Aya Dental Studio"
            description="Preview the clinic environment before your visit. The final image should show the reception or waiting area with staff, prepared with consent."
          />
          <Card variant="highlight" className="mt-7">
            <h3 className="text-lg font-semibold text-charcoal">Image requirements</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-text">
              <li>TODO: staff consent required before publishing.</li>
              <li>TODO: no patients visible without written consent.</li>
              <li>TODO: reception or waiting area is preferred.</li>
              <li>TODO: treatment room acceptable only if clean, staged, and not intimidating.</li>
              <li>TODO: optimize the final 360 image to about 8 MB maximum or less.</li>
            </ul>
          </Card>
        </div>
        <div className="lg:col-span-8">
          <p className="sr-only">
            Interactive 360 degree viewer. Drag horizontally or use the arrow keys when focused.
            The viewer is loaded only when this section approaches the viewport.
          </p>
          <LazyTourViewer imageSrc={tourImagePath} />
        </div>
      </div>
    </section>
  );
}
