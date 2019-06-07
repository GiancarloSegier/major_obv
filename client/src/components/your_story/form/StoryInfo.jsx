import React from "react";
import styles from "./form.module.css";

const StoryInfo = ({ name, getInfo }) => {
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
        // let tagId = tags.findIndex(tag => tag === e.currentTarget.value);
        // tags.splice(tagId);
        for (var i = 0; i < tags.length; i++) {
          if (tags[i] === e.currentTarget.value) {
            tags.splice(i, 1);
          }
        }
      }
    }
    getInfo("tags", tags);
  };

  return (
    <div>
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
                required
                onClick={setTags}
                value={tag}
              />
              {tag}
            </label>
          )
        )
      )}
      ;
    </div>
  );
};

export default StoryInfo;
