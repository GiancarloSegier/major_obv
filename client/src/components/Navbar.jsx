import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import navStyles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <nav className={navStyles.navWrapper}>
      <ul className={`${navStyles.navbar} container`}>
        <div className={navStyles.nav__menu}>
          <li className={navStyles.menu__item}>
            <NavLink
              exact={true}
              className={navStyles.navLink}
              to={ROUTES.home}
              activeClassName={navStyles.active}
            >
              Ons verhaal
            </NavLink>
          </li>
          <li className={navStyles.menu__item}>
            <NavLink
              className={navStyles.navLink}
              to={ROUTES.create}
              activeClassName={navStyles.active}
            >
              Jouw verhaal
            </NavLink>
          </li>
          <li className={navStyles.menu__item}>
            <NavLink
              className={navStyles.navLink}
              to={ROUTES.about}
              activeClassName={navStyles.active}
            >
              Over ons
            </NavLink>
          </li>
        </div>

        <div className={navStyles.logo}>
          <li className={navStyles.menu__item}>
            <NavLink
              className={navStyles.navLink}
              exact={true}
              to={ROUTES.home}
            >
              <img
                className={navStyles.logo__image}
                src="../assets/img/logo.png"
                alt="logo operaballet vlaanderen"
              />
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
