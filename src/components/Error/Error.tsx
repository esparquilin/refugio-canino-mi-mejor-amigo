import classes from "./Error.module.css";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Card customCard={classes.card}>
      <h1>¡Ha ocurrido un error! </h1>
      <p>:(</p>
      <div className={classes.flex}>
        <Link to="/">Regresar</Link>
      </div>
    </Card>
  );
};

export default Error;
