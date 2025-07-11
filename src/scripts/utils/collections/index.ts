import type { CollectionEntry } from "astro:content";
import { groupBy, toPairs } from "lodash-es";
import { createDateComparator, createTitleComparator } from "../comparators";

interface Series {
  name: string;
  articles: CollectionEntry<"posts">[];
}

export type SeriesMap = Map<string, CollectionEntry<"posts">[]>;

/** Returns entries sorted in decreasing order by date */
export function sortBlogCollectionByDate(entries: CollectionEntry<"posts">[]): CollectionEntry<"posts">[] {
  const decOrderDateComparator = createDateComparator("decreasing");
  const sorted = entries.toSorted((entry1, entry2) => decOrderDateComparator(entry1.data.date, entry2.data.date));

  return sorted;
}

export function sortBlogCollectionByTitle(entries: CollectionEntry<"posts">[]): CollectionEntry<"posts">[] {
  const decOrderDateComparator = createTitleComparator("increasing");
  const sorted = entries.toSorted((entry1, entry2) => decOrderDateComparator(entry1.data.title, entry2.data.title));

  return sorted;
}

export function selectSeries(entries: CollectionEntry<"posts">[]): CollectionEntry<"posts">[] {
  return entries.filter(entry => entry.data.series !== undefined);
}

export function groupSeries(entries: CollectionEntry<"posts">[]): Series[] {
  const groupedAsObject = groupBy(entries, ({ data }) => data.series ?? "");
  const groupedSeries = toPairs(groupedAsObject).map(([name, articles]) => ({
    name,
    articles,
  }));

  return groupedSeries;
}

export function groupSeriesAsMap(entries: CollectionEntry<"posts">[]): SeriesMap {
  const seriesPosts = entries.filter(entry => entry.data.series !== undefined);
  const groupedAsObject = groupBy(seriesPosts, ({ data }) => data.series);
  const map = new Map(toPairs(groupedAsObject));

  return map;
}
