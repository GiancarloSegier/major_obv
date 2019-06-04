import React from "react";
import styles from "./MainCharacter.module.css";

const MainCharacter = ({ name, tagline }) => {
  return (
    <article className={styles.character}>
      <img
        className={styles.character__image}
        src="./assets/placeholder2.png"
        alt={`foto van ${name}`}
      />
      <h3 className={styles.character__name}>{name}</h3>
      <p className={styles.character__tagline}>{tagline}</p>
    </article>
  );
};

export default MainCharacter;
