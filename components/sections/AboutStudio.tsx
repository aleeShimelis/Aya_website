import { ClipboardCheck, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const philosophyPoints = [
  {
    title: "Calm visits",
    description: "A quieter appointment experience for patients who want care explained without pressure.",
    icon: HeartHandshake
  },
  {
    title: "Clear explanations",
    description: "Plain-language guidance before decisions are made, with consultation leading the plan.",
    icon: ClipboardCheck
  },
  {
    title: "Clean environment",
    description: "A carefully prepared clinic setting, ready for verified photography before launch.",
    icon: Sparkles
  },
  {
    title: "Thoughtful planning",
    description: "Treatment options should be considered around comfort, timing, and long-term oral health.",
    icon: ShieldCheck
  }
] as const;

export function AboutStudio() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="About the studio"
            title="Dental care shaped around clarity and calm."
            description="Aya Dental Studio is presented as a refined, patient-first clinic experience: clean surroundings, thoughtful appointment flow, and treatment planning that begins with a clear conversation."
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7 xl:gap-6">
          {philosophyPoints.map((point) => (
            <Card key={point.title} className="h-full p-6">
              <point.icon className="h-6 w-6 text-teal" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-charcoal">{point.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-text">{point.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
