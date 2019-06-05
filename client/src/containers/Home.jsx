import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import MainCharacter from "../components/MainCharacter";
import UserStory from "../components/UserStory";
import styles from "./Home.module.css";

const Home = ({ store }) => {
  const { stories, characters } = store;
  console.log(stories);
  return (
    <>
      <section id="intro" className="container margin">
        <h2 className={styles.title}>Ontdek ons verhaal</h2>

        {/* foreach database characters */}
        <div className={styles.characters}>
          {characters.map(character => (
            <MainCharacter key={character.id} props={character} />
          ))}

          <article className={styles.CTA__create}>
            <h3 className={styles.CTA__title}>
              We kennen hun verhaal, nu is het aan jou
            </h3>
            <p className={styles.CTA__tag}>Creeër je eigen verhaal</p>
          </article>
        </div>
      </section>
      <section id="discover" className="container margin">
        <h2 className={styles.section__title}>Ontdek nieuwe verhalen</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          nibh eu bibendum consequat. Donec vel quam molestie, tempor enim ut
        </p>
        <div className={`${styles.filter} margin`}>
          <h3 className="visually-hidden">Filteren</h3>
          <p className={styles.filter__title}>Toon mij:</p>

          {/* foreach database tags --> clickevent?? return value and use it to filter to new array (filteredarray)  */}

          <ul className={styles.filter__tags}>
            <li className={`${styles.filter__tag} ${styles.filter__active}`}>
              Avontuurlijk
            </li>
            <li className={styles.filter__tag}>Triestig</li>
            <li className={styles.filter__tag}>Avontuurlijk</li>
            <li className={styles.filter__tag}>Triestig</li>
            <li className={styles.filter__tag}>Avontuurlijk</li>
            <li className={styles.filter__tag}>Triestig</li>
            <li className={styles.filter__tag}>Avontuurlijk</li>
            <li className={styles.filter__tag}>Triestig</li>
            <li className={styles.filter__tag}>Avontuurlijk</li>
            <li className={styles.filter__tag}>Triestig</li>
          </ul>
        </div>

        <div className={styles.stories}>
          {stories.map(story => (
            <UserStory props={story} key={story.id} />
          ))}
        </div>
      </section>
    </>
  );
};

Home.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(Home));
