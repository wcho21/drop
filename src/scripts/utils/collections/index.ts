import type { CollectionEntry } from "astro:content";
import { createDateComparator } from "../comparators";

export function sortBlogCollectionByDate(entries: CollectionEntry<"blog">[]) {
  const decOrderDateComparator = createDateComparator("decreasing");
  const sorted = entries.toSorted((entry1, entry2) =>
    decOrderDateComparator(entry1.data.date, entry2.data.date),
  );

  return sorted;
}
