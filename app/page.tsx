import type { Metadata } from "next";
import { AboutStudio } from "@/components/sections/AboutStudio";
import { CareStages } from "@/components/sections/CareStages";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { PatientJourney } from "@/components/sections/PatientJourney";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { TestimonialsPlaceholder } from "@/components/sections/TestimonialsPlaceholder";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { VirtualTourPreview } from "@/components/sections/VirtualTourPreview";
import { WhyPatientsChooseAya } from "@/components/sections/WhyPatientsChooseAya";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Aya Dental Studio | Specialist Dental Clinic in Addis Ababa",
  description:
    "Calm, premium dental care near Bole Atlas in Addis Ababa, with appointment requests, services, clinic transparency, and 360° tour readiness.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutStudio />
      <ServicesPreview />
      <WhyPatientsChooseAya />
      <CareStages />
      <TeamPreview />
      <VirtualTourPreview />
      <PatientJourney />
      <TestimonialsPlaceholder />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
