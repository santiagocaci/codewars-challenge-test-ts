export const countHours = (year: number, holidays: string[]): number => {
  const workingDays = holidays.reduce((prev, current) => {
    const currentDate = new Date(year + "-" + current.split("/").join("-"));
    const dayPosition = currentDate.getDay();

    if (dayPosition === 0 || dayPosition === 6) return prev;
    return prev + 1;
  }, 0);

  return workingDays * 2;
};
