import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";
import type { Service } from "@/content/services";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    name: siteConfig.name,
    alternateName: siteConfig.secondaryName,
    url: absoluteUrl("/"),
    logo: absoluteUrl(siteConfig.logoPath),
    image: absoluteUrl(siteConfig.ogImage),
    telephone: siteConfig.phonePrimaryDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bole Atlas Traffic Light, Landmark Plaza, 2nd Floor",
      addressLocality: "Addis Ababa",
      addressCountry: "ET"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "TODO",
      longitude: "TODO"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "TODO",
        closes: "TODO"
      }
    ],
    sameAs: Object.values(siteConfig.socialLinks).filter((link) => !link.startsWith("#"))
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Dentist",
      name: siteConfig.name,
      url: absoluteUrl("/")
    },
    areaServed: {
      "@type": "City",
      name: "Addis Ababa"
    }
  };
}
