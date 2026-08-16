import Link from "next/link";
import { ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import { legalNavigation, primaryNavigation } from "@/content/navigation";
import { services } from "@/content/services";
import { contactActions, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-card-bg">
      <div className="container-site grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-teal-light">
            Calm, specialist dental care near Bole Atlas in Addis Ababa.
          </p>
          <div className="mt-6 space-y-3 text-sm text-teal-light">
            <a className="flex items-center gap-2 hover:text-card-bg" href={contactActions.callPrimary}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phonePrimaryDisplay}
            </a>
            <a className="flex items-start gap-2 hover:text-card-bg" href={contactActions.map}>
              <MapPin className="mt-1 h-4 w-4" aria-hidden="true" />
              <span>{siteConfig.addressFull}</span>
            </a>
          </div>
          <div
            className="mt-6 flex flex-wrap gap-x-4 gap-y-3 text-sm font-semibold text-teal-light"
            aria-label="Aya Dental Studio social profiles"
          >
            <a
              className="inline-flex items-center gap-2 transition hover:text-card-bg"
              href={contactActions.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
            {Object.entries(siteConfig.socialLinks).map(([network, href]) => (
              <a
                key={network}
                className="inline-flex items-center gap-2 capitalize transition hover:text-card-bg"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {network}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Pages</p>
          <ul className="mt-4 space-y-2 text-sm text-teal-light">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-card-bg" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-teal-light">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link className="hover:text-card-bg" href={`/services/${service.slug}`}>
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Legal</p>
          <ul className="mt-4 space-y-2 text-sm text-teal-light">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-card-bg" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate py-5">
        <div className="container-site text-sm text-teal-light">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
