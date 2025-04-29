import type { CollectionEntry } from "astro:content";
import { groupBy, reverse, sortBy } from "lodash-es";

type BlogEntry = CollectionEntry<"blog">;
type SeriesEntry = { name: string; articles: BlogEntry[]; latestDate: Date };

/**
 * @deprecated
 */
export const getSeries = (entries: BlogEntry[]) => {
  // construct series array
  const grouped: [string, BlogEntry[]][] = Object.entries(
    groupBy(entries, ({ data }) => data.series),
  );
  const series: SeriesEntry[] = grouped.map(([name, entries]) => {
    const latestDate = entries
      .map(({ data }) => data.date)
      .reduce((a, b) => (a > b ? a : b));

    return { name, articles: entries, latestDate };
  });

  // return sorted entries
  const sortedByDate = reverse(sortBy(series, entry => entry.latestDate));
  return sortedByDate;
};

/**
 * @deprecated
 */
export const sortCollection = (
  entries: BlogEntry[],
  reversed = true,
): BlogEntry[] => {
  const sortedByDate = sortBy(entries, entry => entry.data.date);

  if (reversed) {
    return reverse(sortedByDate);
  }
  return sortedByDate;
};
