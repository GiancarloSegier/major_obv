import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import navStyles from "./NavBar.module.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  handleToggle = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <nav>
        <div
          className={
            this.state.show
              ? `${navStyles.mover} ${navStyles.navWrapper}`
              : `${navStyles.navWrapper}`
          }
        >
          <ul className={`${navStyles.navbar} container`}>
            <div className={navStyles.nav__menu}>
              <li className={navStyles.menu__item}>
                <NavLink
                  onClick={this.handleToggle}
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
                  onClick={this.handleToggle}
                  className={navStyles.navLink}
                  to={ROUTES.create}
                  activeClassName={navStyles.active}
                >
                  Jouw verhaal
                </NavLink>
              </li>
              <li className={navStyles.menu__item}>
                <NavLink
                  onClick={this.handleToggle}
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
                  onClick={this.handleToggle}
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
              <button onClick={this.handleToggle} className={navStyles.close} />
            </div>
          </ul>
        </div>
        <div className="container">
          <button onClick={this.handleToggle} className={navStyles.hamburger}>
            <div
              className={`${navStyles.hamburgerRect1} ${
                navStyles.hamburgerRect
              }`}
            />
            <div
              className={`${navStyles.hamburgerRect2} ${
                navStyles.hamburgerRect
              }`}
            />
            <div
              className={`${navStyles.hamburgerRect3} ${
                navStyles.hamburgerRect
              }`}
            />
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
