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
      <div className={styles.margin_left}>
        <h2 className={styles.part__title}>
          <span className={styles.part__step}>03</span> Karakter{" "}
        </h2>
        <div>
          <p className={styles.pageTitle}>
            {name} is <br />
            <span className={styles.moveUp}>
              <input
                type="text"
                id="personality1"
                min="1"
                required
                placeholder="Vul een karaktereigenschap in"
                onChange={e => setPersonalities(e, 1)}
                className={styles.inputfield}
              />
              {" ,"}
              <input
                type="text"
                id="personality2"
                required
                placeholder="Vul nog een karaktereigenschap in"
                onChange={e => setPersonalities(e, 2)}
                className={styles.inputfield}
              />
              {" ,"}
            </span>
            <br />
            maar vooral <br />
            <input
              type="text"
              id="personality3"
              required
              placeholder="Vul nog een karaktereigenschap in"
              onChange={e => setPersonalities(e, 3)}
              className={styles.inputfield}
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

export default inject(`store`)(observer(CharacterPersona));
