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
    <section className="container ">
      <div className={styles.split_grid}>
        <div>
          <Link to={`/`}>
            <button className={styles.button_back}>Alle verhalen</button>
          </Link>
          <h2 className={styles.pageTitle}>{current.nickname}</h2>
          <p className={styles.subTitle}>{current.name}</p>
          <div className={styles.margin_left}>
            <p className={styles.intro}>{current.about}</p>
            <Link to={`/character-story/${characterId}`}>
              <button className={styles.button}>Beleef mijn verhaal</button>
            </Link>
          </div>
        </div>
        <div className={styles.character__image}>
          <img
            src={`../assets/img/${current.name}.jpg`}
            alt=""
            className={styles.image}
          />
        </div>
      </div>
    </section>

    // <div className="container">

    //   <section id="characterStory" className={styles.split_grid}>
    //     <img
    //       className={styles.characterDetail__image}
    //       src="../assets/img/Almaviva.jpg"
    //       alt=""
    //     />

    //     <div className={styles.characterDetail__info}>
    //       <p className={styles.characterDetail__nickname}>{current.nickname}</p>
    //       <h2 className={styles.characterDetail__name}>{current.name}</h2>

    //       <p className={styles.characterDetail__about}>{current.about}</p>
    //       <Link to={`/character-story/${characterId}`}>
    //         <button className={styles.button}>Beleef mijn verhaal</button>
    //       </Link>
    //     </div>
    //   </section>
    // </div>
  );
};

export default inject(`store`)(observer(CharacterDetail));
