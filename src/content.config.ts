import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    thumbnail: z.string(),
    series: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { blog };
