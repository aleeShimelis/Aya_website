import type { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Aya Dental Studio | Dental Clinic in Addis Ababa",
  description:
    "Meet the Aya Dental Studio team and learn about its specialist dental care, Bole Atlas location, and opening hours.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Aya Dental Studio"
        title="Specialist dental care at Bole Atlas."
        description="Located on the second floor of Landmark Plaza, Aya Dental Studio brings preventive, restorative, cosmetic, orthodontic, endodontic, and maxillofacial care together in one clinic."
      />
      <section className="section-padding bg-background">
        <div className="container-site grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-stretch">
          <div className="relative min-h-[30rem] overflow-hidden rounded-card border border-border lg:min-h-[44rem]">
            <Image
              src="/images/about/clinic-interior.jpg"
              alt="Interior of Aya Dental Studio"
              fill
              sizes="(min-width: 1024px) 65vw, 100vw"
              quality={90}
              className="object-cover"
            />
          </div>
          <div className="space-y-5">
            <Card>
              <h2 className="text-2xl font-semibold text-charcoal">Consultation-led care</h2>
              <p className="mt-3 text-muted-text">
                Each visit begins with understanding the concern, examining the available options,
                and explaining the recommended next steps. Treatment is planned only after the
                clinical findings, timing, alternatives, and expected aftercare have been discussed.
              </p>
            </Card>
            <Card>
              <h2 className="text-2xl font-semibold text-charcoal">Team information</h2>
              <p className="mt-3 text-muted-text">
                Care is led by Dr. Aymen Ayoub alongside Dr. Ismael Muze and Dr. Tewodros Molla,
                bringing together expertise in endodontics, cosmetic dentistry, orthodontics, and
                maxillofacial surgery.
              </p>
            </Card>
            <Card>
              <h2 className="text-2xl font-semibold text-charcoal">Visit the studio</h2>
              <p className="mt-3 text-muted-text">
                Find Aya Dental Studio at Bole Atlas Traffic Light, Landmark Plaza, 2nd Floor,
                Addis Ababa. The clinic is open Monday to Saturday from 2:30 to 12:00 LT, and visits
                can be requested online, by phone, or through WhatsApp before staff confirmation.
              </p>
            </Card>
          </div>
        </div>
      </section>
      <FinalCta />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
    </>
  );
}
