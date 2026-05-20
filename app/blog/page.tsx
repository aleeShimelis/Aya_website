import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Dental Blog | Aya Dental Studio",
  description:
    "Future dental education and local SEO articles for Aya Dental Studio. No fabricated posts are published.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Prepared for future dental education."
        description="This section is CMS or MDX-ready. No fabricated articles are published in v1."
      />
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <Card variant="highlight">
            <h2 className="text-2xl font-semibold text-charcoal">Content model</h2>
            <p className="mt-3 text-muted-text">
              Future posts should define title, slug, date, excerpt, author, coverImage, and tags.
              All medical content should be reviewed before publication.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
