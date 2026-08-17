import { SectionHeading } from "@/components/ui/SectionHeading";

const philosophyPoints = [
  {
    title: "Calm visits",
    description: "A quieter appointment experience for patients who want care explained without pressure.",
    iconSrc: "/icons/dental/tooth.svg"
  },
  {
    title: "Clear explanations",
    description: "Plain-language guidance before decisions are made, with consultation leading the plan.",
    iconSrc: "/icons/dental/odontology.svg"
  },
  {
    title: "Clean environment",
    description: "A carefully prepared clinic setting, ready for verified photography before launch.",
    iconSrc: "/icons/dental/dental-hygiene.svg"
  },
  {
    title: "Thoughtful planning",
    description: "Treatment options should be considered around comfort, timing, and long-term oral health.",
    iconSrc: "/icons/dental/odontology-implant.svg"
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
                  <span
                    className="about-value-icon"
                    style={{ "--about-icon": `url("${point.iconSrc}")` } as React.CSSProperties}
                    aria-hidden="true"
                  />
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
