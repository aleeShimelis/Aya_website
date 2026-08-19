import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Clean, carefully prepared environment",
    description: "A calm, carefully maintained setting designed to make each visit feel considered.",
    iconSrc: "/icons/dental/dental-hygiene.svg"
  },
  {
    title: "Clear treatment explanations",
    description: "Care options should be discussed in everyday language before treatment begins.",
    iconSrc: "/icons/dental/odontology.svg"
  },
  {
    title: "Thoughtful appointment experience",
    description: "Contact, booking, arrival, and follow-up should feel organized and respectful.",
    iconSrc: "/icons/dental/tooth.svg"
  },
  {
    title: "Patient-first treatment planning",
    description: "Plans should be shaped by assessment, comfort, timing, and patient goals.",
    iconSrc: "/icons/dental/odontology-implant.svg"
  }
] as const;

export function WhyPatientsChooseAya() {
  return (
    <section className="why-aya-section section-padding">
      <div className="container-site why-aya-layout">
        <div className="why-aya-intro">
          <SectionHeading
            eyebrow="Why patients choose Aya"
            title="Trust built through calmer details."
            description="Clarity, preparation, and patient-first planning shape the experience from first contact through follow-up."
          />
        </div>
        <ol className="why-aya-reasons">
          {reasons.map((reason) => (
            <li key={reason.title} className="why-aya-reason">
              <span
                className="why-aya-icon"
                style={{ "--why-aya-icon": `url("${reason.iconSrc}")` } as React.CSSProperties}
                aria-hidden="true"
              />
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
