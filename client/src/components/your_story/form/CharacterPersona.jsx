import React from "react";
import styles from "./form.module.css";

const CharacterPersona = ({ name, getInfo }) => {
  const personalities = [];

  const setPersonalities = e => {
    let currentPersonality = e.currentTarget.id.split("personality")[1] - 1;
    personalities[currentPersonality] = e.currentTarget.value;
    console.log(personalities);
    getInfo("personality", personalities);
  };

  return (
    <div>
      <h2 className={styles.tagline}>03 Karakter </h2>
      <p className={styles.pageTitle}>
        {name} is{" "}
        <input
          type="text"
          id="personality1"
          min="1"
          required
          placeholder="Vul een karaktereigenschap in"
          onChange={setPersonalities}
        />{" "}
        ,{" "}
        <input
          type="text"
          id="personality2"
          required
          placeholder="Vul nog een karaktereigenschap in"
          onChange={setPersonalities}
        />{" "}
        , maar vooral{" "}
        <input
          type="text"
          id="personality3"
          required
          placeholder="Vul nog een karaktereigenschap in"
          onChange={setPersonalities}
        />
      </p>
    </div>
  );
};

export default CharacterPersona;
