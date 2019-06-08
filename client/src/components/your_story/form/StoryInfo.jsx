import React from "react";
import styles from "./form.module.css";
import { inject, observer } from "mobx-react";

const StoryInfo = ({ name, nextForm, store }) => {
  const basicTags = [
    "#Romantisch",
    "#Waargebeurd",
    "#Ontroerend",
    "#Spannend",
    "#Gek",
    "#Mysterieus",
    "#Grappig",
    "#Avontuurlijk",
    "#Onverwacht",
    "#Actievol"
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
      <h2 className={styles.tagline}>02 Leeftijd & Locatie </h2>
      <p className={styles.pageTitle}>{name}'s verhaal is</p>
      {basicTags.map(
        tag => (
          i++,
          (
            <label key={i}>
              <input
                type="checkbox"
                id={`tag${i}`}
                onClick={setTags}
                value={tag}
              />
              {tag}
            </label>
          )
        )
      )}
      <button type="submit" className={styles.button}>
        Volgende
      </button>
    </form>
  );
};

export default inject(`store`)(observer(StoryInfo));
