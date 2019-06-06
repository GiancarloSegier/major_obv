import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserStory.module.css";
import CharacterImage from "./CharacterImage";

const UserStory = ({ props }) => {
  const { name, id, head, eyes, mouth, chest } = props;

  return (
    <Link to={`/story/${id}`}>
      <article className={styles.story}>
        <CharacterImage head={head} eyes={eyes} mouth={mouth} chest={chest} />
        <h3 className="visually-hidden">{name}</h3>
      </article>
    </Link>
  );
};

export default UserStory;
