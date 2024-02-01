import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    thumbnail: image(),
  }),
});

export const collections = {
  "blog": blogCollection,
};
