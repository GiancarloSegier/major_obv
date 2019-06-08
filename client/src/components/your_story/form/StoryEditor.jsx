import React from "react";
import styles from "./form.module.css";
import { inject, observer } from "mobx-react";
const StoryEditor = ({ step, store, submitForm }) => {
  const sendInfo = (dataname, value) => {
    store.getInfo(dataname, value);
  };

  //Make sure that the output of the title has a capital first letter
  const sendTitle = e => {
    const title = e.currentTarget.value;
    const titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1);
    sendInfo("title", titleCapitalized);
  };

  const submitStory = e => {
    // e.preventDefault();
    submitForm(e);
  };

  return (
    <form onSubmit={submitStory}>
      <h2 className={styles.tagline}>05 Jouw verhaal </h2>
      <input
        className={styles.pageTitle}
        name="title"
        id="title"
        required
        placeholder="Schrijf hier je titel"
        onChange={sendTitle}
      />
      <textarea
        name="story"
        id="story"
        cols="30"
        rows="10"
        required
        placeholder="Hier begint jouw verhaal. Een duwtje in de rug nodig? Je vindt hiernaast inspiratie om je op weg te helpen. "
        onChange={e => sendInfo("story", e.currentTarget.value)}
      />
      <button type="submit" className={styles.button}>
        Versturen
      </button>
    </form>
  );
};

export default inject(`store`)(observer(StoryEditor));
