import classes from "./PerritosCards.module.css";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import Card from "../../UI/Card";
import { FormContext } from "../../../store/form-context";

import { transformName, transformSize } from "../../Helpers/transformName";

import { allDogsData } from "../../../interfaces/dogInterfaces";

interface perritosPaginationProps {
  data: allDogsData | undefined;
}

const PerritosCards: React.FC<perritosPaginationProps> = ({ data }) => {
  const createDate = (year: string, month: string) => {
    const date = new Date(`${year}, ${month}, 1`).getTime();
    return date;
  };

  const calcAge = (bornYear: string, bornMonth: string, time: number) => {
    const curDate = new Date();

    return Math.floor(
      (curDate.getTime() - createDate(bornYear, bornMonth)) / time
    );
  };

  const ctx = useContext(FormContext);

  return (
    <ul className={classes.list}>
      {data!.allDogs.map((perrito, _) => (
        <Card customCard={classes.card} key={perrito.id}>
          <li>
            <div className={classes["image-container"]}>
              <img
                alt={`Un perro llamado ${perrito.dogName}`}
                src={perrito.images500[0]}
              ></img>
            </div>
            <div className={classes["data-content"]}>
              <div className={classes.data}>
                <h3 className={classes.name}>
                  {transformName(perrito.dogName)}
                </h3>
                <ul className={classes["data-list"]}>
                  <li>{transformName(perrito.sex)}</li>
                  <li>
                    {/* años */}
                    {calcAge(
                      perrito.born.slice(0, 4),
                      perrito.born.slice(5, 7),
                      1000 * 60 * 60 * 24 * 365.4
                    ) > 1
                      ? calcAge(
                          perrito.born.slice(0, 4),
                          perrito.born.slice(5, 7),
                          1000 * 60 * 60 * 24 * 365.4
                        ) + " años "
                      : ""}
                    {calcAge(
                      perrito.born.slice(0, 4),
                      perrito.born.slice(5, 7),
                      1000 * 60 * 60 * 24 * 365.4
                    ) === 1
                      ? "1 año "
                      : ""}
                    {/* meses */}
                    {calcAge(
                      perrito.born.slice(0, 4),
                      perrito.born.slice(5, 7),
                      1000 * 60 * 60 * 24 * 30.4375
                    ) %
                      12 >
                    1
                      ? (calcAge(
                          perrito.born.slice(0, 4),
                          perrito.born.slice(5, 7),
                          1000 * 60 * 60 * 24 * 30.4375
                        ) %
                          12) +
                        " meses"
                      : ""}
                    {calcAge(
                      perrito.born.slice(0, 4),
                      perrito.born.slice(5, 7),
                      1000 * 60 * 60 * 24 * 30.4375
                    ) %
                      12 ===
                    1
                      ? "1 mes"
                      : ""}
                  </li>
                  <li>
                    {transformName(transformSize(perrito.size, perrito.sex))}
                  </li>
                  <li>{transformName(perrito.breed)}</li>
                </ul>
              </div>
              <div className={classes.buttons}>
                <Link to={perrito.id}>
                  <Button customButton={classes["button-details"]}>
                    Ver detalles
                  </Button>
                </Link>

                <Link to={perrito.id}>
                  <Button
                    customButton={classes["button-adoptar"]}
                    onClick={() => ctx.setFormIsShown(true)}
                  >
                    Adoptar
                  </Button>
                </Link>
              </div>
            </div>
          </li>
        </Card>
      ))}
    </ul>
  );
};

export default PerritosCards;
