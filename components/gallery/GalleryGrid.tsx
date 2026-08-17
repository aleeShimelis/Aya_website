"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type GalleryItem = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  items: readonly GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const figures = gridRef.current?.querySelectorAll<HTMLElement>(".gallery-image");

    if (!figures?.length) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      figures.forEach((figure) => figure.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        rootMargin: "-8% 0px -12%",
        threshold: 0.28
      }
    );

    figures.forEach((figure) => observer.observe(figure));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gridRef} className="container-site grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <figure
          key={item.src}
          className="gallery-image relative aspect-[4/5] overflow-hidden rounded-card border border-border bg-card-bg"
          style={{ "--gallery-delay": `${(index % 3) * 80}ms` } as React.CSSProperties}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            quality={90}
            className="object-cover"
          />
        </figure>
      ))}
    </div>
  );
}
