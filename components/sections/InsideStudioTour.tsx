import { LazyTourViewer } from "@/components/virtual-tour/LazyTourViewer";

const tourImagePath = "/images/virtual-tour/aya-reception-360.jpg";

export function InsideStudioTour() {
  return (
    <section className="studio-tour-section">
      <p className="sr-only">
        Interactive 360 degree viewer. Drag horizontally or use the arrow keys when focused. The
        viewer is loaded only when this section approaches the viewport.
      </p>
      <LazyTourViewer imageSrc={tourImagePath} />
      <div className="container-site studio-tour-copy">
        <p className="eyebrow mb-4">Inside the Studio</p>
        <h2 className="font-serif text-3xl font-semibold leading-tight text-card-bg md:text-5xl">
          Take a 360 degree look inside Aya Dental Studio
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-teal-light md:text-lg md:leading-8">
          Preview the clinic environment before your visit. The final image should show the
          reception or waiting area with staff, prepared with consent.
        </p>
      </div>
    </section>
  );
}
