import { z, defineCollection } from "astro:content";

const defaultSeriesName = "Single articles";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    series: z.string().optional().transform(s => s ?? defaultSeriesName),
    thumbnail: image(),
  }),
});

export const collections = {
  "blog": blogCollection,
};
