import React from "react";
import styles from "./Create.module.css";
import { ROUTES } from "../../constants";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

const Create = ({ store }) => {
  return (
    <section className="container margin-top">
      <div className={styles.splitgrid}>
        <div>
          <p className={styles.subTitle}>Vertel jouw verhaal</p>
          <h2 className={styles.pageTitle}>
            We're all just stories in the end
          </h2>
          <p className={styles.intro}>
            Creëer je eigen karakter en deel jouw verhaal. Waargebeurd of
            verzonnen? Romantisch of vol actie? Aangrijpend of vrolijk? Jij
            bepaalt het plot.
          </p>
          <Link to={ROUTES.createStory}>
            <button>Aan de slag</button>
          </Link>
        </div>
        {/* <img src={randomPic} alt="" /> */}
        <img src="../assets/img/almaviva.jpg" alt="" />
      </div>
    </section>
  );
};

export default inject(`store`)(observer(Create));
