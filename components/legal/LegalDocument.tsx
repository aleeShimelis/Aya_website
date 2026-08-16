import type { ReactNode } from "react";

type LegalDocumentProps = {
  effectiveDate: string;
  children: ReactNode;
};

type LegalSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function LegalDocument({ effectiveDate, children }: LegalDocumentProps) {
  return (
    <article className="section-padding bg-background">
      <div className="container-narrow">
        <p className="border-b border-border pb-6 text-sm font-semibold text-muted-text">
          Effective date: {effectiveDate}
        </p>
        <div className="divide-y divide-border">{children}</div>
      </div>
    </article>
  );
}

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 py-8 first:pt-7">
      <h2 className="font-serif text-2xl font-semibold text-charcoal md:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-muted-text">{children}</div>
    </section>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="grid list-disc gap-2 pl-5 marker:text-teal">{children}</ul>;
}
