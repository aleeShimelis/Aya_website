"use client";

import { useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import Image from "next/image";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

type TourViewerProps = {
  imageSrc: string;
};

export default function TourViewer({ imageSrc }: TourViewerProps) {
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startOffset, setStartOffset] = useState(0);
  const [hasError, setHasError] = useState(false);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    setIsDragging(true);
    setStartX(event.clientX);
    setStartOffset(offset);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!isDragging) {
      return;
    }

    const delta = event.clientX - startX;
    setOffset(startOffset + delta * 0.18);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setOffset((current) => current + 32);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setOffset((current) => current - 32);
    }
  }

  if (hasError) {
    return (
      <div className="rounded-card border border-border bg-card-bg p-6 text-muted-text">
        The 360° image could not be loaded. TODO: add the optimized equirectangular clinic image
        before production.
      </div>
    );
  }

  return (
    <div className="rounded-card border border-border bg-card-bg p-4 shadow-soft">
      <div
        className="tour-viewer-viewport relative cursor-grab overflow-hidden rounded-card bg-muted-bg active:cursor-grabbing"
        role="application"
        aria-label="Interactive 360 degree clinic preview. Drag left or right, or use arrow keys, to pan."
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
      >
        <Image
          src={imageSrc}
          alt="360 degree reception or waiting area placeholder for Aya Dental Studio"
          width={1800}
          height={900}
          className="tour-panorama h-full max-w-none object-cover"
          style={{ transform: `translateX(${offset}px)` }}
          onError={() => setHasError(true)}
          draggable={false}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-charcoal p-4 text-sm text-card-bg">
          Drag to pan, or focus this viewer and use the left and right arrow keys.
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-text">
          Viewer loads only when this section is near the viewport. Final 360 image should be
          optimized to about 8 MB maximum or less if quality allows.
        </p>
        <Button type="button" variant="secondary" onClick={() => setOffset(0)}>
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Reset view
        </Button>
      </div>
    </div>
  );
}
