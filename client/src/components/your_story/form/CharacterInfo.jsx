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
      <div className={styles.margin_left}>
        <h2 className={styles.part__title}>
          <span className={styles.part__step}>02</span> Leeftijd & Locatie{" "}
        </h2>
        <div>
          <p className={`${styles.pageTitle}`}>
            {name} is
            <br />
            <input
              className={styles.inputfield}
              type="number"
              id="age"
              min="1"
              required
              placeholder="Vul leeftijd in"
              onChange={e => sendInfo("age", e.currentTarget.value)}
            />{" "}
            jaar oud <br />
            en woont in
            <input
              className={styles.inputfield}
              type="text"
              id="location"
              required
              placeholder="Vul een locatie in"
              onChange={e => sendInfo("location", e.currentTarget.value)}
            />
          </p>
        </div>
        <button type="submit" className={styles.button}>
          Volgende
        </button>
      </div>
    </form>
  );
};

export default inject(`store`)(observer(CharacterInfo));
