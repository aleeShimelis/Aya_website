import { Clock, MapPin, Phone } from "lucide-react";
import { contactActions, siteConfig } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="hidden border-b border-border bg-charcoal text-card-bg md:block">
      <div className="container-site flex min-h-9 items-center justify-between gap-6 text-sm">
        <a
          href={contactActions.callPrimary}
          className="flex items-center gap-2 transition hover:text-teal-light"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span>{siteConfig.phonePrimaryDisplay}</span>
        </a>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {siteConfig.addressShort}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {siteConfig.hoursDisplay}
          </span>
        </div>
      </div>
    </div>
  );
}
