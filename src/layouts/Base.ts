export const makeTitle
    = (pageTitle: string, siteTitle: string, separator: string) => {
  const title = [pageTitle, siteTitle].join(separator);

  return title;
};
