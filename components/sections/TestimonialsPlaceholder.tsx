import { Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsPlaceholder() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site">
        <SectionHeading
          eyebrow="Patient feedback"
          title="Verified reviews will live here."
          description="No review text, ratings, names, or outcomes are fabricated. This section is prepared for verified Google Reviews or clinic-approved testimonials."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="p-6">
              <Quote className="h-7 w-7 text-teal" aria-hidden="true" />
              <p className="mt-5 font-semibold text-charcoal">Verified testimonial placeholder</p>
              <p className="mt-3 text-sm leading-6 text-muted-text">
                TODO: add real patient feedback only after clinic approval and verification.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
