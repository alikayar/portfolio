const dateFormatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export function formatDate(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00Z`));
}
