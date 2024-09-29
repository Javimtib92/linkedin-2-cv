export function formatDate(input: number | string | Date) {
  const date = new Date(input);
  const formattedMonth = date.toLocaleString("en-US", { month: "long" });
  const formattedYear = date.getFullYear();

  return `${formattedMonth.toUpperCase()} ${formattedYear}`;
}
