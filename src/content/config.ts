import { z, defineCollection } from "astro:content";

const defaultSeriesName = "Single articles";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    thumbnail: image(),
    series: z.string().optional().transform(s => s ?? defaultSeriesName),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  "blog": blogCollection,
};
