import { ClipboardCheck, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";

const trustPoints = [
  {
    title: "Bole Atlas location",
    text: "Clinic location prepared for local search and map verification.",
    icon: MapPin
  },
  {
    title: "Patient-first care",
    text: "Clear explanations and appointment paths before treatment starts.",
    icon: HeartHandshake
  },
  {
    title: "Modern clinic setting",
    text: "Ready for real environment photos and a single 360° preview.",
    icon: Sparkles
  },
  {
    title: "Personalized planning",
    text: "Treatment guidance should be based on consultation, not assumptions.",
    icon: ClipboardCheck
  }
] as const;

export function TrustStrip() {
  return (
    <section className="section-padding-compact bg-muted-bg">
      <div className="container-site grid gap-5 md:grid-cols-2 lg:grid-cols-4 xl:gap-6">
        {trustPoints.map((point) => (
          <Card key={point.title} className="h-full p-5 lg:p-6">
            <point.icon className="h-6 w-6 text-teal" aria-hidden="true" />
            <h2 className="mt-4 text-base font-semibold text-charcoal">{point.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-text">{point.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
