import React from "react";
import styles from "./StoryEnd.module.css";

const StoryEnd = () => {
  return (
    <div className={styles.story}>
      <h2 className={styles.small_title}>notenkraker — tsjaikovski</h2>
      <h3 className={`${styles.end__text}`}>
        dit was een stukje uit het balet de notenkraker van tjayckovski,
        benieuwd naar de rest van het verhaal?
      </h3>
      <button className={styles.button}>meer info</button>
    </div>
  );
};

export default StoryEnd;
