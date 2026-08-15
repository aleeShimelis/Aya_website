"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { primaryNavigation } from "@/content/navigation";
import { contactActions } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);

    if (!isOpen) {
      return;
    }

    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }

      if (event.key !== "Tab" || !focusable || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-card-bg text-charcoal shadow-soft transition hover:border-teal hover:bg-muted-bg hover:text-teal"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen ? (
        <div
          className="mobile-menu-overlay fixed inset-0 z-50 backdrop-blur-sm"
          role="presentation"
        >
          <div
            ref={panelRef}
            id="mobile-menu"
            className="mobile-menu-panel ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto p-5 shadow-elevated"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
              <span className="font-serif text-2xl font-semibold text-charcoal">Menu</span>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-card-bg text-charcoal shadow-soft transition hover:border-teal hover:bg-muted-bg hover:text-teal"
                aria-label="Close navigation menu"
                onClick={() => {
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-6" aria-label="Mobile primary navigation">
              <ul className="space-y-1">
                {primaryNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex min-h-12 items-center rounded-md border border-transparent px-4 py-3 font-semibold text-charcoal transition hover:border-border hover:bg-card-bg hover:text-teal",
                        isCurrentPath(pathname, item.href) &&
                          "border-border bg-card-bg text-teal shadow-soft"
                      )}
                      aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto space-y-3 pt-8">
              <ButtonLink
                href="/contact"
                className="w-full !rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </ButtonLink>
              <ButtonLink
                href={contactActions.callPrimary}
                variant="secondary"
                className="w-full !rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </ButtonLink>
              <ButtonLink
                href={contactActions.whatsapp}
                variant="teal"
                className="w-full !rounded-md"
                onClick={() => setIsOpen(false)}
              >
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
