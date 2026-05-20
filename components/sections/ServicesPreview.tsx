import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

export function ServicesPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site">
        <SectionHeading
          eyebrow="Dental services"
          title="Care explained in plain language."
          description="Explore the main services prepared for Aya Dental Studio. Each page avoids inflated claims and points patients toward consultation when needed."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {services.map((service) => (
            <Card key={service.slug} className="flex h-full flex-col lg:p-7">
              <service.icon className="h-7 w-7 text-teal" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold text-charcoal">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-text">{service.summary}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-charcoal"
              >
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
