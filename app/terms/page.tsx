import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms | Aya Dental Studio",
  description:
    "Website terms placeholder for Aya Dental Studio. Content is informational and does not replace clinical consultation.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Website information and appointment requests."
        description="These terms are placeholders for review before production launch."
      />
      <section className="section-padding bg-background">
        <div className="container-narrow space-y-5">
          <Card>
            <h2 className="text-2xl font-semibold text-charcoal">Informational content</h2>
            <p className="mt-3 text-muted-text">
              Website content is general information only and does not replace diagnosis, treatment,
              or advice from a qualified dental professional.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-charcoal">Appointment requests</h2>
            <p className="mt-3 text-muted-text">
              Appointment submissions are requests only. The clinic should confirm date, time, and
              availability before a visit is final.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
