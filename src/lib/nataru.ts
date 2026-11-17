export const isNataruSeason = () => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();

  return (month === 10 && day >= 1) || month === 11 || (month === 0 && day <= 7);
};
