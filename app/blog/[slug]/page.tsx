import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { createMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  return createMetadata({
    title: "Blog Post Placeholder | Aya Dental Studio",
    description: "Blog post route prepared for MDX or CMS content.",
    path: `/blog/${slug}`,
    type: "article"
  });
}

export default function BlogPostPage() {
  notFound();

  return (
    <PageHero
      eyebrow="Blog"
      title="Post not found"
      description="This placeholder route is ready for future MDX or CMS-backed content."
    />
  );
}
