import React from "react";
import styles from "./UserStory.module.css";

const UserStory = ({ props }) => {
  const { title } = props;
  return (
    <article className={styles.story}>
      <img
        className={styles.story__image}
        src="./assets/placeholder2.png"
        alt={`foto van ${title}`}
      />
      <h3 className={styles.story__name}>{title}</h3>
    </article>
  );
};

export default UserStory;
