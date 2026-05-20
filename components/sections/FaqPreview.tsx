import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/faqs";

export function FaqPreview() {
  return (
    <section className="section-padding bg-muted-bg">
      <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Questions"
            title="Simple answers before you visit."
            description="Common answers are intentionally calm and practical, with consultation recommended where details matter."
          />
          <div className="mt-7">
            <ButtonLink href="/faq" variant="secondary">
              View All FAQs
            </ButtonLink>
          </div>
        </div>
        <Accordion items={faqs.slice(0, 5)} />
      </div>
    </section>
  );
}
