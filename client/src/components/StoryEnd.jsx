import React from "react";
import styles from "./StoryPart.module.css";

const StoryEnd = () => {
  return (
    <div className={styles.story}>
      <h3 className={`${styles.story__text}`}>
        dit was een stukje uit het balet de notenkraker van tjayckovski,
        benieuwd naar de rest van het verhaal?
      </h3>
      <button className={styles.story__button}>meer info</button>
    </div>
  );
};

export default StoryEnd;
