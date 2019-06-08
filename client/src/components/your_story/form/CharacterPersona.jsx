import React from "react";
import styles from "./form.module.css";
import { inject, observer } from "mobx-react";

const CharacterPersona = ({ name, nextForm, store }) => {
  const personalities = [];

  const setPersonalities = (e, number) => {
    let currentPersonality = number - 1;
    personalities[currentPersonality] = e.currentTarget.value;
    store.getInfo("personality", personalities);
  };
  const nextPage = e => {
    e.preventDefault();
    nextForm();
  };

  return (
    <form onSubmit={nextPage}>
      <h2 className={styles.tagline}>03 Karakter </h2>
      <p className={styles.pageTitle}>
        {name} is{" "}
        <input
          type="text"
          id="personality1"
          min="1"
          required
          placeholder="Vul een karaktereigenschap in"
          onChange={e => setPersonalities(e, 1)}
        />{" "}
        ,{" "}
        <input
          type="text"
          id="personality2"
          required
          placeholder="Vul nog een karaktereigenschap in"
          onChange={e => setPersonalities(e, 2)}
        />{" "}
        , maar vooral{" "}
        <input
          type="text"
          id="personality3"
          required
          placeholder="Vul nog een karaktereigenschap in"
          onChange={e => setPersonalities(e, 3)}
        />
      </p>
      <button type="submit" className={styles.button}>
        Volgende
      </button>
    </form>
  );
};

export default inject(`store`)(observer(CharacterPersona));
