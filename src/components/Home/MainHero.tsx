import classes from "./MainHero.module.css";

const MainHero = () => {
  return (
    <>
      <div className={classes["image-container"]}>
        <div className={classes["backdrop-image"]}>
          <div></div>
          <div>
            <h1>
              REFUGIO CANINO
              <br />
              <span>"MI MEJOR AMIGO"</span>
            </h1>
            <h2>"Una segunda oportunidad para un primer hogar"</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHero;
