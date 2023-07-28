export const capitalizeFirstLetter = (name: string) => {
  const newName = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();

  return newName;
};

export const behaviour = (beh: string, who: string) => {
  if (beh === "convive") {
    return `convive con ${who}`;
  } else {
    return `no convive con ${who}`;
  }
};

export const transformFemale = (word: string, sex: string) => {
  if (sex === "hembra") {
    return word.slice(0, -1) + "a";
  } else return word;
};

export const transformSize = (word: string, sex: string) => {
  let transformedSize: string;
  let dogSex = sex;

  switch (word) {
    case "xs":
      transformedSize = "extra pequeño";
      return transformFemale(transformedSize, dogSex);
    case "s":
      transformedSize = "pequeño";
      return transformFemale(transformedSize, dogSex);
    case "m":
      transformedSize = "mediano";
      return transformFemale(transformedSize, dogSex);
    case "l":
      return (transformedSize = "grande");
    case "xl":
      return (transformedSize = "extra grande");
    default:
      return "meadiano";
  }
};
