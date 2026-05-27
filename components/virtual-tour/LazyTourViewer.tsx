"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";

type TourViewerComponent = ComponentType<{ imageSrc: string }>;

type LazyTourViewerProps = {
  imageSrc: string;
};

export function LazyTourViewer({ imageSrc }: LazyTourViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [TourViewer, setTourViewer] = useState<TourViewerComponent | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "360px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || TourViewer || failed) {
      return;
    }

    import("@/components/virtual-tour/TourViewer")
      .then((module) => setTourViewer(() => module.default))
      .catch(() => setFailed(true));
  }, [failed, shouldLoad, TourViewer]);

  return (
    <div ref={containerRef} className="tour-viewer-shell">
      {TourViewer ? <TourViewer imageSrc={imageSrc} /> : <TourPoster failed={failed} />}
    </div>
  );
}

function TourPoster({ failed }: { failed: boolean }) {
  return (
    <div className="tour-viewer-viewport tour-viewer-poster flex items-end overflow-hidden p-5 md:p-8">
      <div className="tour-viewer-message">
        <p className="font-semibold text-card-bg">
          {failed ? "360 viewer unavailable" : "Preparing the 360 degree clinic preview"}
        </p>
        <p className="mt-2 text-sm leading-6 text-teal-light">
          {failed
            ? "The interactive viewer could not load. The final reception image should still be available as an optimized fallback."
            : "The interactive viewer loads when this section is near the viewport, keeping the top of the homepage light."}
        </p>
      </div>
    </div>
  );
}
