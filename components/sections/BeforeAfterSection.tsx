"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";
import type { BeforeAfterImage } from "@/content/services";

type BeforeAfterSectionProps = {
  serviceTitle: string;
  images?: BeforeAfterImage[];
};

type ComparisonImageProps = {
  label: string;
  src: string;
  alt: string;
};

function ComparisonImage({ label, src, alt }: ComparisonImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const canShowImage = failedSrc !== src;

  return (
    <figure className="before-after-frame">
      <figcaption className="before-after-label">{label}</figcaption>
      <div className="before-after-media">
        {canShowImage ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 42vw, 100vw"
            quality={90}
            onError={() => setFailedSrc(src)}
          />
        ) : (
          <div className="before-after-placeholder">
            <ImageOff aria-hidden="true" />
            <span>Approved comparison photo pending</span>
          </div>
        )}
      </div>
    </figure>
  );
}

export function BeforeAfterSection({ serviceTitle, images = [] }: BeforeAfterSectionProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="before-after-section section-padding bg-background" aria-labelledby="before-after-title">
      <div className="container-site">
        <div className="before-after-heading">
          <div>
            <p className="section-eyebrow">Treatment examples</p>
            <h2 id="before-after-title" className="font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Before and after
            </h2>
          </div>
          <p>
            Browse clinic-approved {serviceTitle.toLowerCase()} comparison and treatment-stage
            images. Each frame is shown in full so the original clinical view is not cropped.
          </p>
        </div>

        <div
          className={`before-after-gallery${images.length === 1 ? " before-after-gallery-single" : ""}`}
        >
          {images.map((image, index) => (
            <ComparisonImage
              key={image.src}
              label={`Image ${index + 1}`}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>

        <p className="before-after-note">
          Patient images are published only with documented consent and clinic approval. Photos
          are intended to illustrate an individual case, not guarantee an outcome.
        </p>
      </div>
    </section>
  );
}
