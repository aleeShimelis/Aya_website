import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/content/faqs";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Dental FAQ | Aya Dental Studio Addis Ababa",
  description:
    "Answers to common questions about appointment requests, clinic location, privacy, and dental service planning.",
  path: "/faq"
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Clear answers for a calmer first visit."
        description="These answers are general guidance and do not replace a dental consultation."
      />
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <Accordion items={faqs} />
        </div>
      </section>
      <FinalCta />
      <JsonLd
        data={[
          faqSchema([...faqs]),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" }
          ])
        ]}
      />
    </>
  );
}
