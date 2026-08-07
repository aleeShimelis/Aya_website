import { ClipboardCheck, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
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
    <section className="about-studio-section section-padding">
      <div className="container-site about-studio-layout">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="About the studio"
            title="Dental care shaped around clarity and calm."
            description="Aya Dental Studio is presented as a refined, patient-first clinic experience: clean surroundings, thoughtful appointment flow, and treatment planning that begins with a clear conversation."
          />
        </div>
        <ol className="about-values">
          {philosophyPoints.map((point) => (
            <li key={point.title} className="about-value">
              <div className="about-value-content">
                <div className="about-value-title">
                  <span className="about-value-icon" aria-hidden="true">
                    <point.icon />
                  </span>
                  <h3>{point.title}</h3>
                </div>
                <p>{point.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
