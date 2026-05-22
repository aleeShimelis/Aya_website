import { MessageCircle, Phone } from "lucide-react";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ButtonLink } from "@/components/ui/Button";
import { contactActions } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background shadow-soft">
      <div className="container-site grid min-h-16 grid-cols-[1fr_auto] items-center gap-4 py-3 lg:min-h-20 lg:grid-cols-[minmax(180px,1fr)_auto_minmax(360px,1fr)] lg:gap-6">
        <div className="flex items-center">
          <Logo />
        </div>
        <DesktopNav />
        <div className="hidden items-center justify-end lg:flex">
          <div className="flex items-center gap-1 rounded-pill border border-border bg-card-bg p-1">
            <ButtonLink
              href={contactActions.callPrimary}
              variant="secondary"
              className="!min-h-11 !px-3 !py-2"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call
            </ButtonLink>
            <ButtonLink
              href={contactActions.whatsapp}
              variant="teal"
              className="!min-h-11 !px-3 !py-2"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </ButtonLink>
            <ButtonLink href="/contact" className="!min-h-11 !px-4 !py-2">
              Book Appointment
            </ButtonLink>
          </div>
        </div>
        <div className="flex justify-end lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
