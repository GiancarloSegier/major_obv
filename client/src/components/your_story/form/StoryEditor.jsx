import React from "react";
import styles from "./form.module.css";
const StoryEditor = ({ step, getInfo }) => {
  const sendInfo = (dataname, value) => {
    getInfo(dataname, value);
  };

  //Make sure that the output of the title has a capital first letter
  const sendTitle = e => {
    const title = e.currentTarget.value;
    const titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1);
    sendInfo("title", titleCapitalized);
    console.log(titleCapitalized);
  };

  return (
    <div>
      <h2 className={styles.tagline}>05 Jouw verhaal </h2>
      <input
        className={styles.pageTitle}
        name="title"
        id="title"
        placeholder="Schrijf hier je titel"
        onChange={sendTitle}
      />
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
