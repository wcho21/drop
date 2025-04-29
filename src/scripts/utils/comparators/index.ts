export function createDateComparator(
  order: "increasing" | "decreasing" = "increasing",
) {
  return (date1: Date, date2: Date) => {
    const diff = date1.getTime() - date2.getTime();
    const reverseFactor = order === "increasing" ? 1 : -1;

    return diff * reverseFactor;
  };
}
