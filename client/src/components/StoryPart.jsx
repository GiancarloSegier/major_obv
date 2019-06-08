import React from "react";
import styles from "./StoryPart.module.css";

const StoryPart = ({ story, state, handleClick }) => {
  const { part } = state;

  return (
    <div className={styles.story}>
      <h3 className={styles.story__text}> {story.parts[part].text}</h3>
      <button onClick={handleClick} className={styles.story__button}>
        Volgende
      </button>
    </div>
  );
};

export default StoryPart;
