"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";

const slides = [
  {
    src: "/images/hero/aya-reception.jpg",
    alt: "Aya Dental Studio reception area"
  },
  {
    src: "/images/hero/DrAymen.jpg",
    alt: "Reception and waiting area at Aya Dental Studio"
  }
] as const;

export function HeroSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotionPreference = () => {
      if (reducedMotion.matches) {
        setIsPaused(true);
      }
    };

    syncMotionPreference();
    reducedMotion.addEventListener("change", syncMotionPreference);

    return () => reducedMotion.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      <div className="hero-media" aria-hidden="true">
        <div className="hero-media-frame">
          {slides.map((slide, index) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              sizes="100vw"
              quality={90}
              className={`hero-image hero-slide${activeSlide === index ? " hero-slide-active" : ""}`}
            />
          ))}
        </div>
      </div>
      <button
        type="button"
        className="hero-slideshow-toggle"
        onClick={() => setIsPaused((paused) => !paused)}
        aria-label={isPaused ? "Play hero slideshow" : "Pause hero slideshow"}
        title={isPaused ? "Play slideshow" : "Pause slideshow"}
      >
        {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
      </button>
    </>
  );
}
