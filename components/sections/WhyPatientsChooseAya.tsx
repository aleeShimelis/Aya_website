import { CalendarCheck, ClipboardList, HeartHandshake, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Clean, carefully prepared environment",
    description: "A calm clinic setting with real environment photos to be added after approval.",
    icon: Sparkles
  },
  {
    title: "Clear treatment explanations",
    description: "Care options should be discussed in everyday language before treatment begins.",
    icon: ClipboardList
  },
  {
    title: "Thoughtful appointment experience",
    description: "Contact, booking, arrival, and follow-up should feel organized and respectful.",
    icon: CalendarCheck
  },
  {
    title: "Patient-first treatment planning",
    description: "Plans should be shaped by assessment, comfort, timing, and patient goals.",
    icon: HeartHandshake
  }
] as const;

export function WhyPatientsChooseAya() {
  return (
    <section className="section-padding bg-muted-bg">
      <div className="container-site">
        <SectionHeading
          eyebrow="Why patients choose Aya"
          title="Trust built through calmer details."
          description="This section avoids ratings and unverified claims. It focuses on the experience Aya can own: clarity, preparation, and patient-first planning."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {reasons.map((reason) => (
            <Card key={reason.title} className="h-full p-6">
              <reason.icon className="h-6 w-6 text-teal" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-charcoal">{reason.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-text">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
