import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <>
      <div className="container">
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
            <button className={styles.button}>Bezoek website</button>
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
            <button className={styles.button}>Aan de slag</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
