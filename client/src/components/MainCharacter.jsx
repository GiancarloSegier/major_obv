import React from "react";
import styles from "./MainCharacter.module.css";
import { Link } from "react-router-dom";

const MainCharacter = ({ props }) => {
  const { name, nickname, id } = props;
  return (
    //1. Link toegevoegd
    <Link to={`/character/${id}`} className={styles.character__link}>
      <article className={styles.character}>
        <div className={styles.character__overlay}>
          <img
            className={styles.character__image}
            src={`./assets/img/${name}.jpg`}
            alt={`foto van ${name}`}
          />
        </div>
        <h3 className={styles.character__name}>{name}</h3>
        <p className={styles.character__tagline}>{nickname}</p>
      </article>
    </Link>
  );
};

export default MainCharacter;
