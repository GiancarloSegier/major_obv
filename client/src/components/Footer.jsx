import React from "react";
import styles from "./Footer.module.css";
import { inject, observer } from "mobx-react";

const Footer = ({ store }) => {
  const { characters } = store;

  return (
    <footer>
      <div className="container">
        <div className={styles.footer__grid}>
          <div className={styles.footer__follow}>
            <h4 className={styles.footer__title}>Volg de karakters.</h4>

            {characters.map(character => (
              <ul className={styles.characterlist} key={character.id}>
                <li>
                  <p className={styles.character__name}>{character.name}</p>
                </li>
                <a href={character.facebook}>
                  <li
                    className={`${styles.social__icon} ${
                      styles.social_facebook
                    } `}
                  />
                </a>
                <a href={character.twitter}>
                  <li
                    className={`${styles.social__icon} ${
                      styles.social_twitter
                    } `}
                  />
                </a>
                <a href={character.instagram}>
                  <li
                    className={`${styles.social__icon} ${
                      styles.social_instagram
                    } `}
                  />
                </a>
              </ul>
            ))}
          </div>
          <div className={styles.footer__follow}>
            <h4 className={styles.footer__title}>Deel jouw verhaal</h4>
            <p className={styles.character__name}>
              Deel jouw verhaal of vind
              <br />
              meer inspiratie met de hashtag
              <br />
              <strong>#MeetTheCharacters</strong>
            </p>
          </div>
          <div className={styles.footer__follow}>
            <h4 className={styles.footer__title}>Deel jouw verhaal</h4>
            <p className={styles.character__name}>
              Een project van <br />
              Opera Ballet Vlaanderen
              <br /> Meer info: www.operaballet.be
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default inject(`store`)(observer(Footer));
