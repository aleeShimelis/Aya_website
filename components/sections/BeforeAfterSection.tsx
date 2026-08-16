"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";
import type { BeforeAfterCase } from "@/content/services";

type BeforeAfterSectionProps = {
  serviceTitle: string;
  cases?: BeforeAfterCase[];
};

type ComparisonImageProps = {
  label: "Case 1" | "Case 2";
  src?: string;
  alt?: string;
};

function ComparisonImage({ label, src, alt }: ComparisonImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const canShowImage = Boolean(src && alt && failedSrc !== src);

  return (
    <figure className="before-after-frame">
      <figcaption className="before-after-label">{label}</figcaption>
      <div className="before-after-media">
        {canShowImage && src && alt ? (
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

export function BeforeAfterSection({ serviceTitle, cases = [] }: BeforeAfterSectionProps) {
  const comparisons = cases.length > 0 ? cases : [null];

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
            View real {serviceTitle.toLowerCase()} cases when clinic-approved photography is
            available. Individual results vary and treatment suitability requires an assessment.
          </p>
        </div>

        <div className="before-after-cases">
          {comparisons.map((comparison, index) => (
            <article
              className="before-after-case"
              key={comparison?.comparisonOneSrc ?? `pending-${index}`}
            >
              <div className="before-after-pair">
                <ComparisonImage
                  label="Case 1"
                  src={comparison?.comparisonOneSrc}
                  alt={comparison?.comparisonOneAlt}
                />
                <ComparisonImage
                  label="Case 2"
                  src={comparison?.comparisonTwoSrc}
                  alt={comparison?.comparisonTwoAlt}
                />
              </div>
              {comparison?.caption ? <p className="before-after-caption">{comparison.caption}</p> : null}
            </article>
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
