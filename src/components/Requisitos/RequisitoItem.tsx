import classes from "./RequisitoItem.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useState } from "react";

interface Requisitos {
  title: string;
  text: string;
  text2?: string;
}

interface RequisitoProps {
  requisitos: Requisitos[];
}

const Requisito = ({ requisitos }: RequisitoProps) => {
  const [currIndex, setCurrIndex] = useState(0);

  const onNext = () => {
    setCurrIndex((currIndex) => currIndex + 1);
  };

  const onPrev = () => {
    setCurrIndex((currIndex) => currIndex - 1);
  };

  return (
    <>
      <div className={classes.container}>
        <Card customCard={classes["big-card"]}>
          <div className={classes.text}>
            <h1>Requisitos para adoptar</h1>
          </div>

          <div className={classes.requisito}>
            <h2>{requisitos[currIndex].title}</h2>
            <p>{requisitos[currIndex].text}</p>
            {requisitos[currIndex].text2 && (
              <p className={classes.text2}>{requisitos[currIndex].text2}</p>
            )}
            <div className={classes.buttons}>
              {currIndex !== 0 && (
                <Button
                  onClick={onPrev}
                  customButton={`${classes.button} ${classes.left}`}
                >
                  Anterior
                </Button>
              )}

              {currIndex !== requisitos.length - 1 && (
                <Button
                  onClick={onNext}
                  customButton={`${classes.button} ${classes.right}`}
                >
                  Siguiente
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Requisito;
