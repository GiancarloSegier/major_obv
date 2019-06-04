import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import navStyles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <nav className={navStyles.navWrapper}>
      <ul className={`${navStyles.navbar} container`}>
        <li>
          <NavLink className={navStyles.navLink} to={ROUTES.home}>
            <img
              className={navStyles.logo}
              src="./assets/logo.svg"
              alt="logo operaballet vlaanderen"
            />
          </NavLink>
        </li>
        <div className={navStyles.rightNav}>
          <li>
            <NavLink className={navStyles.navLink} to={ROUTES.home}>
              Ons verhaal
            </NavLink>
          </li>
          <li>
            <NavLink className={navStyles.navLink} to={ROUTES.create}>
              Jouw verhaal
            </NavLink>
          </li>
          <li>
            <NavLink className={navStyles.navLink} to={ROUTES.about}>
              Over ons
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
