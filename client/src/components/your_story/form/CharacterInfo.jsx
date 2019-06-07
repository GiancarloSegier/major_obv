import React from "react";
import styles from "./form.module.css";

const CharacterInfo = ({ step }) => {
  if (step === 2) {
    return (
      <>
        <p>0{step} Jouw personage </p>
        <h2 className={styles.pageTitle}>{step}</h2>
      </>
    );
  }
};

export default CharacterInfo;
