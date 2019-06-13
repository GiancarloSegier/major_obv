import React from "react";
import styles from "./Create.module.css";
import { ROUTES } from "../../constants";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

const Create = ({ store }) => {
  return (
    <section className={`container ${styles.wrapper}`}>
      <div className={styles.split_grid}>
        <div className={styles.character__text}>
          <h2 className={styles.pageTitle}>Vertel jouw verhaal</h2>
          <p className={styles.subTitle}>We're all just stories in the end</p>
          <div className={styles.margin_left}>
            <p className={styles.intro}>
              Creëer je eigen karakter en deel jouw verhaal. Waargebeurd of
              verzonnen? Romantisch of vol actie? Aangrijpend of vrolijk? Jij
              bepaalt het plot.
            </p>
            <Link to={ROUTES.createStory}>
              <button className={styles.button}>Aan de slag</button>
            </Link>
          </div>
        </div>
        <div className={styles.character__image}>
          <img src="../assets/img/create.png" alt="" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default inject(`store`)(observer(Create));
