import React from "react";
import styles from "./Social.module.css";
import { Link } from "react-router-dom";

import { inject, observer, PropTypes } from "mobx-react";

const Almaviva = ({ store }) => {
  const current = store.characters.find(
    character => character.name === "Clara"
  );
  if (!current) {
    return null;
  }
  console.log(current);
  return (
    <div className="container">
      <div className={styles.profile__picture}>
        <img src={`../assets/img/${current.name}.jpg`} />
        <div>
          <h2 className={styles.profile__name}>{current.name}</h2>
          <p className={styles.profile__nickname}>{current.nickname}</p>
        </div>
      </div>
      <div className={styles.social__links}>
        <ul>
          <li className={styles.social__link}>
            <a className={styles.link} href={current.facebook}>
              Facebook
              <div
                className={`${styles.social__icon} ${styles.social_facebook}`}
              />
            </a>
          </li>
          <li>
            <a className={styles.link} href={current.instagram}>
              Instagram
              <div
                className={`${styles.social__icon} ${styles.social_instagram}`}
              />
            </a>
          </li>
          <li>
            <a className={styles.link} href={current.spotify}>
              Spotify
              <div
                className={`${styles.social__icon} ${styles.social_spotify}`}
              />
            </a>
          </li>
          <li>
            <a className={styles.link} href={current.twitter}>
              Twitter
              <div
                className={`${styles.social__icon} ${styles.social_twitter}`}
              />
            </a>
          </li>
          <li>
            <Link className={styles.link} to="/">
              Bekijk mijn verhaal
              <div className={`${styles.social__icon} ${styles.social_obv}`} />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.tagline}>#meetthecharacters</p>
    </div>
  );
};
Almaviva.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(Almaviva));
