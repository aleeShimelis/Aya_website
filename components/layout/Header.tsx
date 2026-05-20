import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ButtonLink } from "@/components/ui/Button";
import { primaryNavigation } from "@/content/navigation";
import { contactActions } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background shadow-soft">
      <div className="container-site flex min-h-16 items-center justify-between gap-6 py-3 lg:min-h-20">
        <Logo />
        <nav className="hidden lg:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-5 text-sm font-semibold text-slate">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-teal" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={contactActions.callPrimary} variant="secondary">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </ButtonLink>
          <ButtonLink href={contactActions.whatsapp} variant="teal">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </ButtonLink>
          <ButtonLink href="/contact">Book Appointment</ButtonLink>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
