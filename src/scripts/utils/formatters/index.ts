const formatLocale = "ko" as const;
const formatOptions = {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "numeric",
  day: "numeric",
} as const;
const formatter = new Intl.DateTimeFormat(formatLocale, formatOptions);

export const formatDate = (date: Date) => formatter.format(date);
