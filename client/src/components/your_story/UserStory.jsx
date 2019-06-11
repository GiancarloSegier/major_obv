import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserStory.module.css";
import CharacterImage from "./CharacterImage";

const UserStory = ({ props }) => {
  const { name, id, head, eyes, mouth, chest } = props;

  return (
    <Link to={`/story/${id}`} className={styles.story__content}>
      <article className={styles.story}>
        <div className={styles.image}>
          <CharacterImage head={head} eyes={eyes} mouth={mouth} chest={chest} />
        </div>
        <div className={styles.story__info}>
          <h3 className={styles.story__name}>{name}</h3>
          <div className={styles.arrow} />
        </div>
      </article>
    </Link>
  );
};

export default UserStory;
