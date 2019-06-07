import React from "react";
import { inject, observer } from "mobx-react";
import styles from "./CharacterDetail.module.css";
import { Link } from "react-router-dom";

const CharacterDetail = ({ characterId, store }) => {
  const { characters } = store;

  const current = characters.find(character => character.id === characterId);
  if (!current) {
    return null;
  }

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
          <Link to={`/character-story/${characterId}`}>
            Beleef mijn verhaal
          </Link>
        </div>
      </section>
    </div>
  );
};

export default inject(`store`)(observer(CharacterDetail));
