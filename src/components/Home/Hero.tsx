import classes from "./Hero.module.css";

import main from "../../assets/images/main-image.jpg";

const Hero = () => {
  return (
    <>
      <div className={classes.hero}>
        <div>
          <h1>Objetivo</h1>
          <p>
            Tenemos como objetivo la reducción de sobre-población canina y
            maltrato, a través de esterilizaciones, adopciones responsables y
            concientizar a la ciudadania sobre la importancia de la
            <span> Tenencia Responsable</span>. El sistema de adopcion nos
            permite poder seguir ingresando y rehabilitando a mas perros que aun
            sutren maltrato y se encuentran en las calles.
          </p>
        </div>
        <img src={main} alt="main" />
      </div>
    </>
  );
};

export default Hero;
