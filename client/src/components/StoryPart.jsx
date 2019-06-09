import React from "react";
import styles from "./StoryPart.module.css";

const StoryPart = ({ story, state, handleClick }) => {
  const { part, show } = state;

  let show_text = {
    opacity: "1"
  };

  let hide_text = {
    opacity: "0",
    filter: "blur(20px)",
    transform: "translateY(2rem)",
    transform: "scale(0.8)"
  };
  ////
  let vis = show ? show_text : hide_text;
  return (
    <div className={styles.story}>
      <h3 style={vis} className={`${styles.story__text}`}>
        {story.parts[part].text}
      </h3>
      <button onClick={handleClick} className={styles.story__button}>
        Volgende
      </button>
    </div>
  );
};

export default StoryPart;
