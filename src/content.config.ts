import { defineCollection, z, reference } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    thumbnail: z.string(),
    series: z.string().optional(),
    featured: z.boolean().optional(),
    pack: reference("pack").optional(),
  }),
});

const series = defineCollection({
  loader: file("src/series.json"),
  schema: z.object({
    description: z.string(),
    slug: z.string(),
  }),
});

const featured = defineCollection({
  loader: file("src/featured.json"),
  schema: z.object({}),
});

export const collections = { blog, series, featured };
