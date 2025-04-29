import type { CollectionEntry } from "astro:content";
import { createDateComparator } from "../comparators";

export function sortBlogCollectionByDate(
  entries: CollectionEntry<"blog">[],
): CollectionEntry<"blog">[] {
  const decOrderDateComparator = createDateComparator("decreasing");
  const sorted = entries.toSorted((entry1, entry2) =>
    decOrderDateComparator(entry1.data.date, entry2.data.date),
  );

  return sorted;
}

export function selectFeatured(
  entries: CollectionEntry<"blog">[],
): CollectionEntry<"blog">[] {
  return entries.filter(entry => (entry.data.featured ?? false) === true);
}

export function selectNonfeatured(
  entries: CollectionEntry<"blog">[],
): CollectionEntry<"blog">[] {
  return entries.filter(entry => (entry.data.featured ?? false) === false);
}

export function selectSeries(
  entries: CollectionEntry<"blog">[],
): CollectionEntry<"blog">[] {
  return entries.filter(entry => entry.data.series !== undefined);
}
