import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | Aya Dental Studio",
  description:
    "Privacy-conscious website and form handling notes for Aya Dental Studio, pending legal and provider review.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy-conscious form handling."
        description="This policy is a launch placeholder and must be reviewed by the clinic and qualified legal counsel before production."
      />
      <section className="section-padding bg-background">
        <div className="container-narrow space-y-5">
          <Card>
            <h2 className="text-2xl font-semibold text-charcoal">Information collected</h2>
            <p className="mt-3 text-muted-text">
              Appointment and contact forms collect basic contact details and a short message only.
              Do not submit detailed medical history through these forms.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-charcoal">Provider setup</h2>
            <p className="mt-3 text-muted-text">
              TODO: configure healthcare-appropriate form handling, email delivery, storage, bot
              protection, and retention rules before launch.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-charcoal">Legal review</h2>
            <p className="mt-3 text-muted-text">
              This website is structured to support privacy-conscious, HIPAA-ready workflows, but it
              does not publicly claim HIPAA compliance. TODO: complete provider verification,
              healthcare privacy review, and Ethiopia-specific data privacy/legal review.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
