import { CalendarCheck, ClipboardList, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { title: "Book", text: "Request a visit by form, call, or WhatsApp.", icon: CalendarCheck },
  { title: "Consultation", text: "Discuss concerns and receive an initial assessment.", icon: ClipboardList },
  { title: "Treatment plan", text: "Review options, timing, and next steps.", icon: ShieldCheck },
  { title: "Treatment", text: "Proceed only after the plan is clear.", icon: HeartPulse },
  { title: "Aftercare", text: "Receive guidance for home care and follow-up.", icon: Sparkles }
] as const;

export function PatientJourney() {
  return (
    <section className="section-padding bg-muted-bg">
      <div className="container-site">
        <SectionHeading
          eyebrow="Patient journey"
          title="A clearer path from first contact to aftercare."
          description="The experience should feel organized and low-pressure, especially for nervous patients and families."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {steps.map((step, index) => (
            <Card key={step.title} className="p-5">
              <div className="flex items-center justify-between gap-3">
                <step.icon className="h-6 w-6 text-teal" aria-hidden="true" />
                <span className="text-sm font-semibold text-muted-text">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-charcoal">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-text">{step.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
