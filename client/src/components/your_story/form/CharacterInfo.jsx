import React from "react";
import styles from "./form.module.css";

const CharacterInfo = ({ step, name }) => {
  console.log(name);

  if (step === 2) {
    return (
      <div>
        <h2 className={styles.tagline}>02 Leeftijd & Locatie </h2>
        <p className={styles.pageTitle}>
          {name} is{" "}
          <input
            type="number"
            id="age"
            min="1"
            required
            placeholder="Vul leeftijd in"
          />{" "}
          jaar oud en woont in{" "}
          <input
            type="text"
            id="location"
            required
            placeholder="Vul een locatie in"
          />
        </p>
      </div>
    );
  }
};

export default CharacterInfo;
