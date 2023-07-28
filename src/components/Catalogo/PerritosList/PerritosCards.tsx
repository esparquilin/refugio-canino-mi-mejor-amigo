import classes from "./PerritosCards.module.css";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import Card from "../../UI/Card";
import { FormContext } from "../../../store/form-context";

import {
  capitalizeFirstLetter,
  transformSize,
} from "../../Helpers/transformName";

import { allDogsData } from "../../../interfaces/dogInterfaces";

import DogAge from "../DogAge";

interface perritosPaginationProps {
  data: allDogsData | undefined;
}

const PerritosCards: React.FC<perritosPaginationProps> = ({ data }) => {
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
                  {capitalizeFirstLetter(perrito.dogName)}
                </h3>
                <ul className={classes["data-list"]}>
                  <li>{capitalizeFirstLetter(perrito.sex)}</li>

                  <li>
                    <DogAge dogBirth={perrito.born} />
                  </li>

                  <li>
                    {capitalizeFirstLetter(
                      transformSize(perrito.size, perrito.sex)
                    )}
                  </li>
                  <li>{capitalizeFirstLetter(perrito.breed)}</li>
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
