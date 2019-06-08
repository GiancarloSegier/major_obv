import React from "react";
import styles from "./form.module.css";
import { inject, observer } from "mobx-react";

const CharacterInfo = ({ name, store, nextForm }) => {
  const sendInfo = (dataname, value) => {
    store.getInfo(dataname, value);
  };

  const nextPage = e => {
    e.preventDefault();
    nextForm();
  };

  return (
    <form onSubmit={nextPage}>
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
      <button type="submit">Volgende</button>
    </form>
  );
};

export default inject(`store`)(observer(CharacterInfo));
