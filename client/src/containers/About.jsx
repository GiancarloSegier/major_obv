import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

const About = () => {
  return (
    <>
      <div className="container margin-bottom">
        <div className={styles.about_opera}>
          <p className={styles.subTitle}>
            Opera ballet <br /> vlaanderen
          </p>
          <div>
            <h2 className={styles.pageTitle}>Wie zijn wij</h2>
            <p className={styles.body_text}>
              Creëer je eigen karakter en deel jouw verhaal. Waargebeurd of
              verzonnen? Romantisch of vol actie? Aangrijpend of vrolijk? Jij
              bepaalt het plot. Creëer je eigen karakter en deel jouw verhaal.
              Waargebeurd of verzonnen? Romantisch of vol actie? Aangrijpend of
              vrolijk? Jij bepaalt het plot.
            </p>
            <a
              className={styles.button}
              target="_blank"
              href="https://operaballet.be/en"
            >
              Bezoek website
            </a>
          </div>
        </div>
        <div className={styles.about_opera}>
          <p className={styles.subTitle}>
            Meet the <br /> characters
          </p>
          <div>
            <h2 className={styles.pageTitle}>het project</h2>
            <p className={styles.body_text}>
              Creëer je eigen karakter en deel jouw verhaal. Waargebeurd of
              verzonnen? Romantisch of vol actie? Aangrijpend of vrolijk? Jij
              bepaalt het plot. Creëer je eigen karakter en deel jouw verhaal.
              Waargebeurd of verzonnen? Romantisch of vol actie? Aangrijpend of
              vrolijk? Jij bepaalt het plot.
            </p>
            <Link className={styles.button} to={ROUTES.create}>
              Aan de slag
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
