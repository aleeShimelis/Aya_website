"use client";

import { useState } from "react";
import type { PointerEvent } from "react";
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
        className="relative min-h-96 cursor-grab overflow-hidden rounded-card bg-muted-bg active:cursor-grabbing"
        role="application"
        aria-label="Interactive 360 degree clinic tour preview. Drag left or right to pan."
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <Image
          src={imageSrc}
          alt="360 degree clinic tour placeholder"
          width={1800}
          height={900}
          className="tour-panorama h-96 max-w-none object-cover"
          style={{ transform: `translateX(${offset}px)` }}
          onError={() => setHasError(true)}
          draggable={false}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-charcoal p-4 text-sm text-card-bg">
          Drag to pan. Production should replace this with a true optimized equirectangular clinic
          image.
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-text">
          Lightweight viewer loaded only on this page. No homepage bundle impact.
        </p>
        <Button type="button" variant="secondary" onClick={() => setOffset(0)}>
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Reset view
        </Button>
      </div>
    </div>
  );
}
