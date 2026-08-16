import type { Metadata } from "next";
import { AboutStudio } from "@/components/sections/AboutStudio";
import { CareStages } from "@/components/sections/CareStages";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { FinalCta } from "@/components/sections/FinalCta";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { Hero } from "@/components/sections/Hero";
import { InsideStudioTour } from "@/components/sections/InsideStudioTour";
import { PatientJourney } from "@/components/sections/PatientJourney";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { WhyPatientsChooseAya } from "@/components/sections/WhyPatientsChooseAya";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Aya Dental Studio | Specialist Dental Clinic in Addis Ababa",
  description:
    "Calm, premium dental care near Bole Atlas in Addis Ababa, with appointment requests, specialist services, clinic transparency, and an interactive 360-degree tour.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutStudio />
      <ServicesPreview />
      <WhyPatientsChooseAya />
      <InsideStudioTour />
      <CareStages />
      <TeamPreview />
      <PatientJourney />
      <GoogleReviews />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
