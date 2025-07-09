export function createDateComparator(order: "increasing" | "decreasing" = "increasing") {
  return (date1: Date, date2: Date) => {
    const diff = date1.getTime() - date2.getTime();
    const reverseFactor = order === "increasing" ? 1 : -1;

    return diff * reverseFactor;
  };
}

export function createTitleComparator(order: "increasing" | "decreasing" = "increasing") {
  return (title1: string, title2: string) => {
    const diff = title1.localeCompare(title2);
    const reverseFactor = order === "increasing" ? 1 : -1;

    return diff * reverseFactor;
  };
}
