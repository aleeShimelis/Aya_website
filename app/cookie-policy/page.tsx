import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Cookie Policy | Aya Dental Studio",
  description:
    "Cookie and analytics consent placeholder for Aya Dental Studio. Analytics are disabled by default.",
  path: "/cookie-policy"
});

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Cookies"
        title="Analytics stay off until consent is configured."
        description="This page prepares the site for future consent-gated analytics without loading tracking scripts by default."
      />
      <section className="section-padding bg-background">
        <div className="container-narrow space-y-5">
          <Card>
            <h2 className="text-2xl font-semibold text-charcoal">Essential cookies</h2>
            <p className="mt-3 text-muted-text">
              Essential cookies may be used for security, bot protection, and basic site behavior.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-charcoal">Analytics</h2>
            <p className="mt-3 text-muted-text">
              Google Analytics 4 is a disabled placeholder. It must be consent-gated before loading
              any analytics script.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
