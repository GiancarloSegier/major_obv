import React from "react";
import styles from "./UserStory.module.css";

const UserStory = ({ name }) => {
  return (
    <article className={styles.story}>
      <img
        className={styles.story__image}
        src="./assets/placeholder2.png"
        alt={`foto van ${name}`}
      />
      <h3 className={styles.story__name}>{name}</h3>
    </article>
  );
};

export default UserStory;
