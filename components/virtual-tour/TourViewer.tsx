"use client";

import { useEffect, useRef, useState } from "react";

type TourViewerProps = {
  imageSrc: string;
};

export default function TourViewer({ imageSrc }: TourViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let disposed = false;
    let viewer: { destroy: () => void } | undefined;

    import("@photo-sphere-viewer/core")
      .then(({ Viewer, events }) => {
        if (disposed || !viewerRef.current) {
          return;
        }

        const panoramaViewer = new Viewer({
          container: viewerRef.current,
          panorama: imageSrc,
          defaultYaw: "-90deg",
          defaultPitch: "-3deg",
          defaultZoomLvl: 0,
          mousewheelCtrlKey: true,
          touchmoveTwoFingers: true,
          navbar: ["zoomOut", "zoomIn", "fullscreen"],
          lang: {
            ctrlZoom: "Hold Ctrl and scroll to zoom",
            twoFingers: "Use two fingers to look around"
          },
          loadingTxt: "Loading the 360 degree clinic view"
        });

        panoramaViewer.addEventListener(events.ReadyEvent.type, () => {
          if (!disposed) {
            setIsReady(true);
          }
        });
        panoramaViewer.addEventListener(events.PanoramaErrorEvent.type, () => {
          if (!disposed) {
            setHasError(true);
          }
        });

        viewer = panoramaViewer;
      })
      .catch(() => {
        if (!disposed) {
          setHasError(true);
        }
      });

    return () => {
      disposed = true;
      viewer?.destroy();
    };
  }, [imageSrc]);

  return (
    <div className="tour-viewer-frame">
      <div
        ref={viewerRef}
        className="tour-viewer-viewport"
        role="region"
        aria-label="Interactive 360 degree clinic preview. Drag to look around and use the controls to zoom or enter fullscreen."
        aria-busy={!isReady && !hasError}
      />
      {!isReady && (
        <div className="tour-viewer-status tour-viewer-poster flex items-end p-5 md:p-8">
          <div className="tour-viewer-message" role={hasError ? "alert" : "status"}>
            <p className="font-semibold text-card-bg">
              {hasError ? "360 degree image unavailable" : "Loading the 360 degree clinic view"}
            </p>
            <p className="mt-2 text-sm leading-6 text-teal-light">
              {hasError
                ? "The interactive clinic preview could not load. Please refresh the page and try again."
                : "This should only take a moment."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
