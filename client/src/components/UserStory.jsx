import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserStory.module.css";

const UserStory = ({ props }) => {
  const { name, id } = props;

  return (
    <Link to={`/story/${id}`}>
      <article className={styles.story}>
        <img
          className={styles.story__image}
          src="./assets/placeholder2.png"
          alt={`foto van ${name}`}
        />
        <h3 className={styles.story__name}>{name}</h3>
      </article>
    </Link>
  );
};

export default UserStory;
