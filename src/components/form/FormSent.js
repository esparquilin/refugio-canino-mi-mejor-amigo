import { useContext } from "react";
import classes from "./FormSent.module.css";
import { FormContext } from "../../store/form-context";
import Button from "../UI/Button";

const FormSent = () => {
  const ctx = useContext(FormContext);

  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => ctx.setFormSucceed(false)}
      ></div>
      <div className={classes.modal}>
        <h3>¡Su formulario ha sido enviado!</h3>
        <p>Nos contactaremos con usted para el siguiente paso</p>
        <Button
          customButton={classes.button}
          onClick={() => ctx.setFormSucceed(false)}
        >
          Regresar
        </Button>
      </div>
    </>
  );
};

export default FormSent;
