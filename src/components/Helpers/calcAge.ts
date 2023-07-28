export const calculateAge = ({
  dogBirth,
}: {
  dogBirth: string | undefined;
}) => {
  const currDate = new Date();

  const bornYear = dogBirth?.slice(0, 4);
  const bornMonth = dogBirth?.slice(5, 7);

  const createDate = (year: string, month: string) => {
    const date = new Date(`${year}, ${month}, 1`).getTime();
    return date;
  };

  const ageInYears = Math.floor(
    (currDate.getTime() - createDate(bornYear!, bornMonth!)) /
      (1000 * 60 * 60 * 24 * 365.4)
  );

  const ageInMonths =
    Math.floor(
      (currDate.getTime() - createDate(bornYear!, bornMonth!)) /
        (1000 * 60 * 60 * 24 * 30.4375)
    ) % 12;

  return { dogYears: ageInYears, dogMonths: ageInMonths };
};
