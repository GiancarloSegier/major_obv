import React from "react";
import styles from "./form.module.css";
const StoryEditor = ({ step, getInfo }) => {
  const sendInfo = (dataname, value) => {
    getInfo(dataname, value);
  };
  return (
    <div>
      <h2 className={styles.tagline}>05 Jouw verhaal </h2>
      <p className={styles.pageTitle}>Schrijf hier je titel</p>
      <textarea
        name="story"
        id="story"
        cols="30"
        rows="10"
        placeholder="Hier begint jouw verhaal. Een duwtje in de rug nodig? Je vindt hiernaast inspiratie om je op weg te helpen. "
        onChange={e => sendInfo("story", e.currentTarget.value)}
      />
      ;
    </div>
  );
};

export default StoryEditor;
