import classes from "./AdoptarForm.module.css";
import Button from "../UI/Button";

import { FormContext } from "../../store/form-context";
import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { capitalizeFirstLetter } from "../Helpers/transformName";

const AdoptarForm = (props) => {
  const ctx = useContext(FormContext);

  const formik = useFormik({
    initialValues: {
      dogName: `${capitalizeFirstLetter(props.dogName)}`,
      name: "",
      lastName: "",
      cel: "",
      reason: "",
    },
    onSubmit: (values) => {
      const sendData = async () => {
        await fetch(
          "https://solicitudes-adopcion-default-rtdb.firebaseio.com/solicitudes.json",
          {
            method: "POST",
            body: JSON.stringify({
              dogName: values.dogName,
              name: values.name,
              lastName: values.lastName,
              cel: values.cel,
              reason: values.reason,
            }),
          }
        );
      };
      sendData();
      ctx.setFormIsShown(false);
      ctx.setFormSucceed(true);
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().required("El nombre no puede ir vacío").trim(),
      lastName: Yup.string()
        .trim()
        .required("El apellido no puede ir vacío")
        .trim(),
      cel: Yup.number()
        .required("Debe proporcionar un número de contacto")
        .max(9999999999, "Debes proporcionar un número de telefono válido"),
      reason: Yup.string()
        .trim()
        .required("Debe proporcionar la razon de su adopción"),
    }),
  });

  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => ctx.setFormIsShown(false)}
      ></div>

      <div className={classes.modal}>
        <h2>Formulario de adopción</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.grid}>
            <div className={classes.field}>
              <label>Nombre</label>
              <input
                name="name"
                placeholder="Yera"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
              ></input>
              <div className={classes.error}>
                {formik.errors.name &&
                  formik.touched.name &&
                  formik.errors.name}
              </div>
            </div>
            <div className={classes.field}>
              <label>Apellido(s)</label>
              <input
                name="lastName"
                placeholder="Macha"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              ></input>
              <div className={classes.error}>
                {formik.errors.lastName &&
                  formik.touched.lastName &&
                  formik.errors.lastName}
              </div>
            </div>
            <div className={classes.field}>
              <label>Nombre del perro</label>
              <input
                className={classes["dog-name"]}
                name="dogName"
                value={formik.values.dogName}
                readOnly
              ></input>
            </div>
            <div className={classes.field}>
              <label>Telefono</label>
              <input
                name="cel"
                placeholder="555-5555-555"
                type="number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                value={formik.values.cel}
                onChange={formik.handleChange}
              ></input>
              <div className={classes.error}>
                {formik.errors.cel && formik.touched.cel && formik.errors.cel}
              </div>
            </div>
            <div className={classes.motivo}>
              <label>Motivo</label>
              <textarea
                name="reason"
                placeholder="Escribe tu motivo para adoptar"
                value={formik.values.reason}
                onChange={formik.handleChange}
              ></textarea>
              <div className={classes.error}>
                {formik.errors.reason &&
                  formik.touched.reason &&
                  formik.errors.reason}
              </div>
            </div>
            <div></div>
            <div className={classes.flex}>
              <Button submit="submit" customButton={classes.button}>
                Enviar solicitud
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdoptarForm;
