import classes from "./PerroItem.module.css";

import { useState, useContext } from "react";

import {
  transformName,
  transformFemale,
  transformSize,
  behaviour,
} from "../../Helpers/transformName";
import IsLoading from "../../Helpers/isLoading";

import Card from "../../UI/Card";
import Button from "../../UI/Button";

import { useParams } from "react-router-dom";
import { FormContext } from "../../../store/form-context";

import AdoptarForm from "../../form/AdoptarForm";
import FormSent from "../../form/FormSent";

import { useSingleDog } from "../../../hooks/fetchPerritos";

import { calculateAge } from "../../Helpers/calcAge";

const apiURL = process.env.REACT_APP_API_URL;

const PerroItem = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const ctx = useContext(FormContext);
  const { perro } = useParams();

  const { isLoading, dogDescription } = useSingleDog({ apiURL, perro });

  const { dogYears, dogMonths } = calculateAge({
    dogBirth: dogDescription?.born,
  });

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
          {dogYears > 1 && <p>{dogYears + " años "}</p>}
          {dogYears === 1 && dogMonths === 0 && <p>1 año</p>}
          {dogYears === 1 && dogMonths === 1 && <p>1 año 1 mes</p>}
          {dogYears === 1 && dogMonths > 1 && (
            <p>{"1 año " + dogMonths + " meses"}</p>
          )}
          {dogYears < 1 && (
            <p>{dogMonths > 1 ? dogMonths + " meses" : "1 mes"}</p>
          )}
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
