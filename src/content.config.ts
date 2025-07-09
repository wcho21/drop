import { defineCollection, z, reference } from "astro:content";
import { glob, file } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/collections/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    thumbnail: z.string(),
    series: z.string().optional(),
    pack: reference("pack").optional(),
  }),
});

const series = defineCollection({
  loader: file("src/collections/series.json"),
  schema: z.object({
    description: z.string(),
    slug: z.string(),
  }),
});

const featured = defineCollection({
  loader: file("src/collections/featured.json"),
  schema: z.object({}),
});

export const collections = { posts, series, featured };
