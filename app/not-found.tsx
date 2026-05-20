import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function NotFound() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <Card className="text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-charcoal">Page not found</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-text">
            The page may have moved, or the link may be outdated. You can return home, browse
            services, or contact the clinic.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/">Go Home</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              View Services
            </ButtonLink>
            <Link className="inline-flex min-h-12 items-center justify-center text-sm font-semibold text-teal" href="/contact">
              Contact Clinic
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
