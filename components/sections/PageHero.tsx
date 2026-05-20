import { ButtonLink } from "@/components/ui/Button";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({ eyebrow, title, description, ctaLabel, ctaHref }: PageHeroProps) {
  return (
    <section className="section-padding-compact border-b border-border bg-muted-bg">
      <div className="container-narrow text-center">
        {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
        <h1 className="font-serif text-4xl font-semibold leading-tight text-charcoal md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-text">{description}</p>
        {ctaLabel && ctaHref ? (
          <div className="mt-7">
            <ButtonLink href={ctaHref}>{ctaLabel}</ButtonLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}
