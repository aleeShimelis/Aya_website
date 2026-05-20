"use client";

import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <Card className="text-center">
          <p className="eyebrow">Something went wrong</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-charcoal">
            We could not load this page.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-text">
            Try again, or contact the clinic if you were trying to request an appointment.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button type="button" onClick={reset}>
              Try Again
            </Button>
            <ButtonLink href="/contact" variant="secondary">
              Contact Clinic
            </ButtonLink>
          </div>
        </Card>
      </div>
    </section>
  );
}
