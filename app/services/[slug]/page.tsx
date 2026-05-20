import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { getServiceBySlug, services } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return createMetadata({
      title: "Service Not Found | Aya Dental Studio",
      description: "The requested dental service could not be found.",
      path: `/services/${params.slug}`
    });
  }

  return createMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`
  });
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Dental service"
        title={service.title}
        description={service.intro}
        ctaLabel="Request Appointment"
        ctaHref="/contact"
      />
      <section className="section-padding bg-background">
        <div className="container-site grid gap-8 lg:grid-cols-[0.9fr_1fr]">
          <Card>
            <service.icon className="h-8 w-8 text-teal" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-semibold text-charcoal">When it may be recommended</h2>
            <ul className="mt-5 space-y-3 text-muted-text">
              {service.recommendedFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-pill bg-teal" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-charcoal">What to expect</h2>
            <ul className="mt-5 space-y-3 text-muted-text">
              {service.expectations.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-pill bg-teal" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-charcoal">Aftercare notes</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {service.aftercare.map((item) => (
                <div key={item} className="rounded-card bg-muted-bg p-4 text-sm leading-6 text-muted-text">
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <section className="section-padding bg-muted-bg">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl font-semibold text-charcoal">Questions about {service.shortTitle}</h2>
          <div className="mt-6">
            <Accordion items={service.faq} />
          </div>
        </div>
      </section>
      <FinalCta />
      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faq),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` }
          ])
        ]}
      />
    </>
  );
}
