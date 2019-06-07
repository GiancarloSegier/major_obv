import React from "react";
import styles from "./StoryTimeline.module.css";
const StoryTimeline = story => {
  const parts = Object.values(story.story).length;
  const listItems = [];
  for (let i = 0; i < parts; i += 1) {
    listItems.push(
      <li>
        <div className={styles.bulletpoint} />
      </li>
    );
  }
  return (
    <div className="container">
      <ul className={styles.timeline}>{listItems}</ul>
    </div>
  );
};

export default StoryTimeline;
