import React from "react";
import { inject, observer } from "mobx-react";
import styles from "./CharacterDetail.module.css";

const CharacterDetail = ({ characterId, store }) => {
  const { characters } = store;

  const current = characters.find(character => character.id === characterId);
  if (!current) {
    return null;
  }
  console.log(characters);
  console.log(current.name, current.nickname, current.about);

  return (
    <div className="container margin-top">
      <section id="characterStory" className={styles.split_grid}>
        <img
          className={styles.characterDetail__image}
          src="https://via.placeholder.com/636x800"
          alt=""
        />

        <div className={styles.characterDetail__info}>
          <h2 className={styles.characterDetail__name}>{current.name}</h2>
          <p className={styles.characterDetail__nickname}>{current.nickname}</p>
          <p className={styles.characterDetail__about}>{current.about}</p>
          <button>Beleef mijn verhaal</button>
        </div>
      </section>
    </div>
  );
};

export default inject(`store`)(observer(CharacterDetail));
