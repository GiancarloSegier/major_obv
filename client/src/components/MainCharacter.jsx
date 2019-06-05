import React from "react";
import styles from "./MainCharacter.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

const MainCharacter = ({ props }) => {
  const { name, nickname, id } = props;
  return (
    //1. Link toegevoegd
    <Link to={`/character/${id}`}>
      <article className={styles.character}>
        <img
          className={styles.character__image}
          src="./assets/placeholder2.png"
          alt={`foto van ${name}`}
        />
        <h3 className={styles.character__name}>{name}</h3>
        <p className={styles.character__tagline}>{nickname}</p>
      </article>
    </Link>
  );
};

export default MainCharacter;
