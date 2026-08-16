import { ExternalLink, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/constants";

export function GoogleReviews() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeading
          eyebrow="Patient feedback"
          title="Feedback published on Google."
          description="Review text is shown only when it can be traced to Aya Speciality Dental Clinic's public Google Business Profile."
        />

        <article className="border-y border-border py-8 md:grid md:grid-cols-[auto_1fr] md:gap-6">
          <Quote className="h-9 w-9 text-teal" aria-hidden="true" />
          <div>
            <div className="mt-5 flex gap-1 text-warning md:mt-0" aria-label="5 out of 5 stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-current" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-5 font-serif text-2xl leading-relaxed text-charcoal">
              &ldquo;Very good clinic.&rdquo;
            </blockquote>
            <p className="mt-4 font-semibold text-charcoal">Yezid Muhammad</p>
            <p className="mt-1 text-sm text-muted-text">Published on Google</p>
            <a
              className="mt-5 inline-flex items-center gap-2 font-semibold text-teal transition hover:text-charcoal"
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              View the Google Business Profile
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
