import { z } from "zod";

export const blogFrontmatterSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  date: z.string().min(1),
  excerpt: z.string().min(1),
  author: z.string().min(1),
  coverImage: z.string().min(1),
  tags: z.array(z.string()).default([])
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;
