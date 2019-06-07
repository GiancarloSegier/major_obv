import React from "react";
import styles from "./form.module.css";

const CharacterInfo = ({ name, getInfo }) => {
  console.log(name);

  const sendInfo = (dataname, value) => {
    getInfo(dataname, value);
  };

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
          onChange={e => sendInfo("age", e.currentTarget.value)}
        />{" "}
        jaar oud en woont in{" "}
        <input
          type="text"
          id="location"
          required
          placeholder="Vul een locatie in"
          onChange={e => sendInfo("location", e.currentTarget.value)}
        />
      </p>
    </div>
  );
};

export default CharacterInfo;
