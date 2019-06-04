import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src="./assets/logo.svg" alt="logo operaballet vlaanderen" />
        </li>
        <div>
          <li>
            <NavLink to={ROUTES.home}>Ons verhaal</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.create}>Jouw verhaal</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.about}>Over ons</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
