import classes from "./Footer.module.css";

import { BsFacebook, BsInstagram, BsTelephone, BsHouse } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

import logo from "../../assets/images/icon-image.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.grid}>
        <Link to="/">
          <img src={logo} alt="Logo page" />
        </Link>

        <div className={classes.contact}>
          <h3>¡Contactanos!</h3>

          <div>
            <BsHouse className={classes.icon} />
            <p>
              Canal Sin Nombre No. 57, 50400 Temascalcingo de José María
              Velasco, Méx.
            </p>
          </div>

          <a className={classes.tel} href="tel:712-189-0790">
            <BsTelephone className={classes.icon} />
            <p>71-2189-0790</p>
          </a>
          <a className={classes.tel} href="tel:712-206-1799">
            <BsTelephone className={classes.icon} />
            <p>71-2206-1799</p>
          </a>
          <a className={classes.tel} href="tel:712-215-3946">
            <BsTelephone className={classes.icon} />
            <p>71-2215-3946</p>
          </a>
        </div>

        <div className={classes["social-media-icons"]}>
          <div className={classes["align-social-media"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/alberguecaninomimejoramigo?mibextid=LQQJ4d"
            >
              <BsFacebook className={`${classes.link} ${classes.facebook}`} />
              <p>Refugio Canino Mi Mejor Amigo</p>
            </a>
          </div>

          <div className={classes["align-social-media"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/refugio_canino_mi_mejoramigo/?igshid=YmMyMTA2M2Y%3D"
            >
              <BsInstagram
                className={`${classes.link} ${classes.instagram}`}
              ></BsInstagram>
              <p>@refugio_canino_mi_mejoramigo</p>
            </a>
          </div>

          <div className={classes["align-social-media"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.tiktok.com/@refugiomimejoamigotemaa?_t=8aKNwXYiiVp&_r=1"
            >
              <FaTiktok
                className={`${classes.link} ${classes.tiktok}`}
              ></FaTiktok>
              <p>@refugiomimejoamigotemaa</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
