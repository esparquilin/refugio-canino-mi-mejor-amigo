const DogAge = ({ dogBirth }: { dogBirth: string | undefined }) => {
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

  return (
    <>
      {ageInYears > 1 && <span>{ageInYears + " años "}</span>}
      {ageInYears === 1 && ageInMonths === 0 && <span>1 año</span>}
      {ageInYears === 1 && ageInMonths === 1 && <span>1 año 1 mes</span>}
      {ageInYears === 1 && ageInMonths > 1 && (
        <span>{"1 año " + ageInMonths + " meses"}</span>
      )}
      {ageInYears < 1 && (
        <span>{ageInMonths > 1 ? ageInMonths + " meses" : "1 mes"}</span>
      )}
    </>
  );
};

export default DogAge;
