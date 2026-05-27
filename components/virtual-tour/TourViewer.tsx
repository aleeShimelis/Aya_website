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
      <div className="tour-viewer-viewport tour-viewer-poster flex items-end overflow-hidden p-5 md:p-8">
        <div className="tour-viewer-message">
          <p className="font-semibold text-card-bg">360 degree image unavailable</p>
          <p className="mt-2 text-sm leading-6 text-teal-light">
            Add the optimized equirectangular clinic image before production.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="tour-viewer-frame">
      <div
        className="tour-viewer-viewport relative cursor-grab overflow-hidden bg-muted-bg active:cursor-grabbing"
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
        <div className="tour-viewer-hint pointer-events-none absolute bottom-5 left-5 max-w-md rounded-card border border-border bg-charcoal p-4 text-sm text-card-bg md:bottom-8 md:left-8">
          Drag to pan, or focus this viewer and use the left and right arrow keys.
        </div>
        <Button
          type="button"
          variant="secondary"
          className="absolute bottom-5 right-5 border-border bg-card-bg md:bottom-8 md:right-8"
          onClick={() => setOffset(0)}
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Reset view
        </Button>
      </div>
    </div>
  );
}
