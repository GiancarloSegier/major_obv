import React from "react";
import styles from "./StoryEnd.module.css";
import { ROUTES } from "../constants";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

const StoryEnd = ({ id, store }) => {
  const { characters } = store;

  const current = characters.find(character => character.id === id);

  if (!current) {
    return null;
  }

  return (
    <div className={styles.story}>
      <h2 className={styles.small_title}>
        {current.title} — {current.author}
      </h2>
      <h3 className={`${styles.end__text}`}>
        Je beleefde net een stukje van de {current.title}. <br /> Goesting
        gekregen om zelf je eigen verhaal te creëren?
      </h3>
      <Link to={ROUTES.create} className={styles.noLink}>
        <button className={styles.button}>Aan de slag</button>
      </Link>
    </div>
  );
};

export default inject(`store`)(observer(StoryEnd));
