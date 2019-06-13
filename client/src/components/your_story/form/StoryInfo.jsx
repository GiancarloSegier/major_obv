import React from "react";
import styles from "./form.module.css";
import { inject, observer } from "mobx-react";

const StoryInfo = ({ name, nextForm, store }) => {
  const basicTags = [
    "Romantisch",
    "Waargebeurd",
    "Ontroerend",
    "Spannend",
    "Gek",
    "Mysterieus",
    "Grappig",
    "Avontuurlijk",
    "Onverwacht",
    "Actievol"
  ];
  let i = 0;
  const tags = [];
  const setTags = e => {
    if (e.currentTarget.checked) {
      tags.push(e.currentTarget.value);
    } else {
      if (tags.includes(e.currentTarget.value)) {
        for (var i = 0; i < tags.length; i++) {
          if (tags[i] === e.currentTarget.value) {
            tags.splice(i, 1);
          }
        }
      }
    }
    store.getInfo("tags", tags);
  };

  const nextPage = e => {
    e.preventDefault();
    if (tags.length > 0) {
      nextForm();
    }
  };

  return (
    <form onSubmit={nextPage}>
      <div className={styles.margin_left}>
        <h2 className={styles.part__title}>
          <span className={styles.part__step}>04</span> Genres{" "}
        </h2>
        <div>
          <p className={styles.pageTitle}>
            {name}'s <br /> verhaal is
          </p>
          <div className={styles.tags}>
            {basicTags.map(
              tag => (
                i++,
                (
                  <label key={i} className={styles.tag}>
                    <input
                      type="checkbox"
                      id={`tag${i}`}
                      onClick={setTags}
                      value={`#${tag}`}
                      className={styles.tag__input}
                    />
                    <div className={styles.tag__checkBox}>{tag}</div>
                  </label>
                )
              )
            )}
          </div>
        </div>
        <button type="submit" className={styles.button}>
          Volgende
        </button>
      </div>
    </form>
  );
};

export default inject(`store`)(observer(StoryInfo));
