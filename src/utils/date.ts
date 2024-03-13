export function formatDate(input) {
  const date = new Date(input);
  const formattedMonth = date.toLocaleString("en-US", { month: "long" });
  const formattedYear = date.getFullYear();

  return `${formattedMonth.toUpperCase()} ${formattedYear}`;
}
