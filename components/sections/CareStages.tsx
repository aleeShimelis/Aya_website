import { Heart, ShieldCheck, SmilePlus, Users } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stages = [
  {
    title: "Children & families",
    description:
      "A reassuring setting for families who want preventive guidance and age-appropriate dental habits.",
    icon: Users
  },
  {
    title: "Teens & orthodontic care",
    description:
      "Alignment conversations for teens and families, with treatment options confirmed after assessment.",
    icon: SmilePlus
  },
  {
    title: "Adults & restorative care",
    description:
      "Support for fillings, root canal concerns, crowns, bridges, and long-term maintenance planning.",
    icon: ShieldCheck
  },
  {
    title: "Cosmetic smile care",
    description:
      "Measured cosmetic guidance for patients considering whitening or a refreshed smile appearance.",
    icon: Heart
  }
] as const;

export function CareStages() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site">
        <SectionHeading
          eyebrow="Care for every stage of life"
          title="Warm care, kept refined."
          description="Aya can speak to families, teens, adults, and cosmetic-care patients without becoming playful, exaggerated, or claim-heavy."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {stages.map((stage) => (
            <Card key={stage.title} className="h-full p-6">
              <stage.icon className="h-6 w-6 text-teal" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-charcoal">{stage.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-text">{stage.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
