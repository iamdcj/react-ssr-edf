export const getYear = () => new Date().getFullYear();

export const returnDate = (date: string) => {
  const _Date = new Date(date);

  if (!_Date) return;

  const settings = { year: "numeric", month: "long", day: "numeric" };
  return _Date.toLocaleDateString("", settings);
};
