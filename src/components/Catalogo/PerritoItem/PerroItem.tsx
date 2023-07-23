import classes from "./PerroItem.module.css";

import { useContext } from "react";

import {
  transformName,
  transformFemale,
  transformSize,
  behaviour,
} from "../../Helpers/transformName";

import { useState } from "react";
import Card from "../../UI/Card";
import { useParams } from "react-router-dom";
import Button from "../../UI/Button";
import { FormContext } from "../../../store/form-context";
import AdoptarForm from "../../form/AdoptarForm";
import FormSent from "../../form/FormSent";
import IsLoading from "../../Helpers/isLoading";
import { useFetchSingleDog } from "../../../hooks/fetchPerritos";

const apiURL = process.env.REACT_APP_API_URL;

const PerroItem = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const ctx = useContext(FormContext);

  const { perro } = useParams();

  const { isLoading, dogDescription } = useFetchSingleDog(apiURL, perro);

  const createDate = (year: string, month: string) => {
    const date = new Date(`${year}, ${month}, 1`).getTime();
    return date;
  };

  const calcAge = (bornYear: string, bornMonth: string, actualTime: number) => {
    const curDate = new Date();

    return Math.floor(
      (curDate.getTime() - createDate(bornYear, bornMonth)) / actualTime
    );
  };

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <>
      {ctx.formIsShown && <AdoptarForm dogName={dogDescription!.dogName} />}
      {ctx.formSucceed && <FormSent />}
      <div className={classes.container}>
        <div className={classes.items}>
          {dogDescription?.images400.map((img: string, indx: number) => (
            <img
              alt="perro"
              key={indx}
              src={img}
              className={classes.img}
              style={indx === currIndex ? { filter: "opacity(1)" } : {}}
              onClick={() => setCurrIndex(indx)}
            />
          ))}
        </div>

        <div className={classes["big-img-container"]}>
          <img
            src={dogDescription?.images700[currIndex]}
            className={classes["big-img"]}
            alt={`un perro llamano ${dogDescription?.dogName} no.${currIndex}`}
          />
        </div>

        <div className={classes.text}>
          <h2>{transformName(dogDescription!.dogName)}</h2>
          <p>{transformName(dogDescription!.sex)}</p>
          <p>
            {/* años */}
            {calcAge(
              dogDescription!.born.slice(0, 4),
              dogDescription!.born.slice(5, 7),
              1000 * 60 * 60 * 24 * 365.4
            ) > 1
              ? calcAge(
                  dogDescription!.born.slice(0, 4),
                  dogDescription!.born.slice(5, 7),
                  1000 * 60 * 60 * 24 * 365.4
                ) + " años "
              : ""}
            {calcAge(
              dogDescription!.born.slice(0, 4),
              dogDescription!.born.slice(5, 7),
              1000 * 60 * 60 * 24 * 365.4
            ) === 1
              ? "1 año "
              : ""}
            {/* meses */}
            {calcAge(
              dogDescription!.born.slice(0, 4),
              dogDescription!.born.slice(5, 7),
              1000 * 60 * 60 * 24 * 30.4375
            ) %
              12 >
            1
              ? (calcAge(
                  dogDescription!.born.slice(0, 4),
                  dogDescription!.born.slice(5, 7),
                  1000 * 60 * 60 * 24 * 30.4375
                ) %
                  12) +
                " meses"
              : ""}
            {calcAge(
              dogDescription!.born.slice(0, 4),
              dogDescription!.born.slice(5, 7),
              1000 * 60 * 60 * 24 * 30.4375
            ) %
              12 ===
            1
              ? "1 mes"
              : ""}
          </p>
          <p>
            {transformName(
              transformSize(dogDescription!.size, dogDescription!.sex)
            )}
          </p>
          <p>{transformName(dogDescription!.breed)}</p>
          <p
            style={{
              color: `${
                dogDescription!.dogB === "no convive" ? "#c92a2a" : ""
              }`,
            }}
          >
            {transformName(behaviour(dogDescription!.dogB, "otros perros"))}
          </p>
          <p
            style={{
              color: `${
                dogDescription!.humanB === "no convive" ? "#c92a2a" : ""
              }`,
            }}
          >
            {transformName(behaviour(dogDescription!.humanB, "personas"))}
          </p>
          <p
            style={{
              color: `${
                dogDescription?.animalB === "no convive" ? "#c92a2a" : ""
              }`,
            }}
          >
            {transformName(
              behaviour(dogDescription!.animalB, "ganado y aves de corral")
            )}
          </p>
          <p className={classes.esterilizado}>
            {transformFemale(
              transformName(
                dogDescription!.sterilized ? "esterilizado" : "no esterilizado"
              ),
              dogDescription!.sex
            )}
          </p>
          {dogDescription?.notes && (
            <p>Nota: {transformName(dogDescription?.notes)}</p>
          )}
          {dogDescription?.warning && (
            <div>
              <Card customCard={classes.card}>
                <p className={classes.advertencia}>
                  <span>Advertencia:</span>{" "}
                  {transformName(dogDescription?.warning)}
                </p>
              </Card>
            </div>
          )}
          <div className={classes.align}>
            <Button
              customButton={classes.button}
              onClick={() => ctx.setFormIsShown(true)}
            >
              Adoptar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerroItem;
