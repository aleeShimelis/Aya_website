"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Pause, Play, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/constants";

const reviews = [
  {
    author: "Alazar Shimelis",
    quote:
      "I was very pleased with the treatment i received. The staff are very friendly and also very professional.",
    imageSrc: "/images/reviews/alazar-shimelis.jpg",
    imageAlt: "Google profile image for Alazar Shimelis"
  },
  {
    author: "Yezid Muhammad",
    quote: "Great clinic",
    imageSrc: "/images/reviews/yezid-muhammad.jpg",
    imageAlt: "Google profile image for Yezid Muhammad"
  }
] as const;

export function GoogleReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);

  useEffect(() => {
    if (
      isUserPaused ||
      isInteractionPaused ||
      reviews.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isInteractionPaused, isUserPaused]);

  const activeReview = reviews[activeIndex];

  function showPreviousReview() {
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  }

  function showNextReview() {
    setActiveIndex((current) => (current + 1) % reviews.length);
  }

  return (
    <section className="section-padding bg-background">
      <div className="container-site grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Patient feedback"
            title="5.0 from two Google reviews."
            description="Every review in this carousel is published on Aya Speciality Dental Clinic's public Google Business Profile."
          />
          <a
            className="mt-6 inline-flex items-center gap-2 font-semibold text-teal transition hover:text-charcoal"
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            View the Google Business Profile
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div
          className="border-y border-border"
          onMouseEnter={() => setIsInteractionPaused(true)}
          onMouseLeave={() => setIsInteractionPaused(false)}
          onFocusCapture={() => setIsInteractionPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsInteractionPaused(false);
            }
          }}
        >
          <article
            key={activeReview.author}
            className="google-review-slide flex min-h-[22rem] flex-col justify-center py-7 md:grid md:min-h-72 md:grid-cols-[auto_1fr] md:items-center md:gap-6"
            aria-label={`Google review ${activeIndex + 1} of ${reviews.length}`}
          >
            <Quote className="h-8 w-8 text-teal" aria-hidden="true" />
            <div>
              <div
                className="mt-4 flex gap-1 text-warning md:mt-0"
                aria-label="5 out of 5 stars"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 font-serif text-xl leading-relaxed text-charcoal md:text-2xl">
                &ldquo;{activeReview.quote}&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <Image
                  src={activeReview.imageSrc}
                  alt={activeReview.imageAlt}
                  width={44}
                  height={44}
                  sizes="44px"
                  quality={90}
                  className="h-11 w-11 rounded-full border border-border object-cover"
                />
                <div>
                  <p className="font-semibold text-charcoal">{activeReview.author}</p>
                  <p className="mt-1 text-sm text-muted-text">Published on Google</p>
                </div>
              </div>
            </div>
          </article>

          {reviews.length > 1 && (
            <div className="flex items-center justify-between border-t border-border py-3">
              <p className="text-sm font-semibold text-muted-text" aria-live="polite">
                {activeIndex + 1} / {reviews.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="review-control"
                  onClick={showPreviousReview}
                  aria-label="Show previous Google review"
                  title="Previous review"
                >
                  <ChevronLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="review-control"
                  onClick={() => setIsUserPaused((paused) => !paused)}
                  aria-label={
                    isUserPaused ? "Resume rotating Google reviews" : "Pause rotating Google reviews"
                  }
                  title={isUserPaused ? "Resume rotation" : "Pause rotation"}
                >
                  {isUserPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
                </button>
                <button
                  type="button"
                  className="review-control"
                  onClick={showNextReview}
                  aria-label="Show next Google review"
                  title="Next review"
                >
                  <ChevronRight aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
