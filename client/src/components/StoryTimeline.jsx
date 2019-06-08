import React from "react";
import styles from "./StoryTimeline.module.css";
const StoryTimeline = ({ story, state }) => {
  const { part } = state;
  console.log(part);
  const { parts } = story;
  let i = -1;
  return (
    <div className="container">
      <ul className={styles.timeline}>
        {parts.map(item => {
          i++;

          return (
            <div
              className={`${styles.line} ${
                i <= part ? styles.active_line : ""
              }`}
            >
              <li
                key={i}
                className={`${styles.bulletpoint} ${
                  i === part ? styles.active : i < part ? styles.done : ""
                }`}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default StoryTimeline;
