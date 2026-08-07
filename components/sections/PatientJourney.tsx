import { CalendarCheck, ClipboardList, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    phase: "Start",
    title: "Book",
    text: "Request a visit by form, call, or WhatsApp.",
    icon: CalendarCheck
  },
  {
    phase: "Understand",
    title: "Consultation",
    text: "Discuss concerns and receive an initial assessment.",
    icon: ClipboardList
  },
  {
    phase: "Decide",
    title: "Treatment plan",
    text: "Review options, timing, and next steps.",
    icon: ShieldCheck
  },
  {
    phase: "Care",
    title: "Treatment",
    text: "Proceed only after the plan is clear.",
    icon: HeartPulse
  },
  {
    phase: "Continue",
    title: "Aftercare",
    text: "Receive guidance for home care and follow-up.",
    icon: Sparkles
  }
] as const;

export function PatientJourney() {
  return (
    <section className="journey-section section-padding">
      <div className="container-site">
        <SectionHeading
          eyebrow="Patient journey"
          title="A clearer path from first contact to aftercare."
          description="The experience should feel organized and low-pressure, especially for nervous patients and families."
          align="center"
        />
        <div className="journey-map">
          <ol className="journey-list">
          {steps.map((step, index) => (
            <li key={step.title} className="journey-step">
              <div className="journey-marker" aria-hidden="true">
                <span className="journey-number">0{index + 1}</span>
                <step.icon className="journey-icon" />
              </div>
              <div className="journey-copy">
                <p className="journey-phase">{step.phase}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
