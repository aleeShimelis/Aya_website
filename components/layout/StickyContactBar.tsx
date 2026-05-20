import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { contactActions } from "@/lib/constants";

export function StickyContactBar() {
  return (
    <div className="sticky-contact-bar fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card-bg p-2 shadow-elevated md:hidden">
      <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-charcoal">
        <a
          href={contactActions.callPrimary}
          className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-md bg-muted-bg"
        >
          <Phone className="h-4 w-4 text-teal" aria-hidden="true" />
          Call
        </a>
        <a
          href={contactActions.whatsapp}
          className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-md bg-teal-light"
        >
          <MessageCircle className="h-4 w-4 text-teal" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href="/contact"
          className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-md bg-charcoal text-card-bg"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          Book
        </a>
      </div>
    </div>
  );
}
