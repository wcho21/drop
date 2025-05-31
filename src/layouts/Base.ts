export function generateTitle(pageTitle: string, siteTitle: string, separator: string): string {
  const title = [pageTitle, siteTitle].join(separator);

  return title;
}
