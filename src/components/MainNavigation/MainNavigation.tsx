import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

import { GiDogHouse } from "react-icons/gi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaDog } from "react-icons/fa";

import logo from "../../assets/images/icon-image.png";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link to="/">
          <img src={logo} alt="Page logo"></img>
        </Link>

        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <GiDogHouse />
              <p className={classes.text}>&nbsp; Inicio</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/requisitos"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <AiOutlineUnorderedList />
              <p className={classes.text}>&nbsp; Requisitos</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalogo"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <FaDog />
              <p className={classes.text}> &nbsp; Perritos</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
