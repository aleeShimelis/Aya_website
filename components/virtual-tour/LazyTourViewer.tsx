"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import { Card } from "@/components/ui/Card";

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
    <div ref={containerRef}>
      {TourViewer ? <TourViewer imageSrc={imageSrc} /> : <TourPoster failed={failed} />}
    </div>
  );
}

function TourPoster({ failed }: { failed: boolean }) {
  return (
    <Card className="tour-viewer-viewport flex flex-col justify-end overflow-hidden p-0">
      <div className="placeholder-surface flex flex-1 items-end p-5 md:p-8">
        <div className="max-w-lg rounded-card border border-border bg-card-bg p-5 shadow-soft">
          <p className="font-semibold text-charcoal">
            {failed ? "360 viewer unavailable" : "Preparing the 360° clinic preview"}
          </p>
          <p className="mt-2 text-sm leading-6 text-muted-text">
            {failed
              ? "The interactive viewer could not load. The final reception image should still be available as an optimized fallback."
              : "The interactive viewer loads when this section is near the viewport, keeping the top of the homepage light."}
          </p>
        </div>
      </div>
    </Card>
  );
}
