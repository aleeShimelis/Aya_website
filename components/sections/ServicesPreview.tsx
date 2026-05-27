import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getServicesForGroup, serviceGroups } from "@/content/service-groups";

export function ServicesPreview() {
  return (
    <section className="service-preview-section section-padding bg-muted-bg">
      <div className="container-site">
        <SectionHeading
          eyebrow="Dental services"
          title="Care grouped around patient needs."
          description="Services are organized by the kind of care patients may be looking for, while each treatment page keeps its consultation-led explanation."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-7">
          {serviceGroups.map((group) => (
            <Card key={group.title} className="service-card flex h-full flex-col gap-5 p-5 lg:p-6">
              <div
                className="service-card-media flex items-center justify-center text-teal"
                role="img"
                aria-label={`${group.title} image placeholder`}
              >
                <ImageIcon className="h-8 w-8" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-text">{group.description}</p>
              </div>
              <div className="space-y-3">
                {getServicesForGroup(group).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex min-h-11 items-center justify-between gap-3 rounded-md border border-border bg-muted-bg px-4 py-3 text-sm font-semibold text-charcoal transition hover:border-teal hover:bg-teal-light hover:text-teal focus-visible:border-teal"
                  >
                    <span>{service.shortTitle}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
