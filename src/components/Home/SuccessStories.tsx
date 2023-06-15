import classes from "./SuccessStories.module.css";

import celso from "../../assets/images/celso.jpg";
import shakira from "../../assets/images/shakira.jpg";
import peluche from "../../assets/images/peluche.jpg";
import canelo from "../../assets/images/canelo.jpg";
import hershys from "../../assets/images/hershys.jpg";
import luneta from "../../assets/images/luneta.jpg";
import rocco from "../../assets/images/rocco.jpg";
import ojitos from "../../assets/images/ojitos.jpg";

const SuccessStories = () => {
  return (
    <>
      <h2 className={classes.title}>Dando una segunda oportunidad</h2>
      <div className={classes["dog-container"]}>
        <div>
          <img src={celso} alt="perro 1" />
          <h3>Celso</h3>
        </div>
        <div>
          <img src={luneta} alt="perro 1" />
          <h3>Luneta</h3>
        </div>
        <div>
          <img src={peluche} alt="perro 1" />
          <h3>Peluche</h3>
        </div>
        <div>
          <img src={canelo} alt="perro 1" />
          <h3>Canelo</h3>
        </div>
        <div>
          <img src={rocco} alt="perro 1" />
          <h3>Rocco</h3>
        </div>
        <div>
          <img src={hershys} alt="perro 1" />
          <h3>Hershys</h3>
        </div>

        <div>
          <img src={shakira} alt="perro 1" />
          <h3>Shakira</h3>
        </div>
        <div>
          <img src={ojitos} alt="perro 1" />
          <h3>Ojitos</h3>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
