import React from "react";
import styles from "./StoryDetail.module.css";
import { inject, observer } from "mobx-react";

const StoryDetail = ({ storyId, store }) => {
  const { stories } = store;
  const currentStory = stories.find(story => story.id === storyId);
  if (!currentStory) {
    return null;
  }

  const {
    name,
    title,
    age,
    gender,
    location,
    personality,
    tags,
    head,
    eyes,
    body,
    mouth,
    story
  } = currentStory;

  const splitStory = story.split("\r\n");

  return (
    <section id="story" className={`container ${styles.story} margin-top`}>
      <div className={styles.story__about}>
        <div className={styles.story__image}>
          <img
            className={styles.story__imagepart}
            src={`../assets/img/bodies/body${body}.png`}
            alt={`lichaam van het personage`}
          />
          <img
            className={styles.story__imagepart}
            src={`../assets/img/mouths/mouth${mouth}.png`}
            alt={`mond van het personage`}
          />
          <img
            className={styles.story__imagepart}
            src={`../assets/img/eyes/eyes${eyes}.png`}
            alt={`ogen van het personage`}
          />
          <img
            className={styles.story__imagepart}
            src={`../assets/img/heads/head${head}.png`}
            alt={`hoofd van het personage`}
          />
        </div>

        <h2 className={styles.story__author}>Over de Auteur</h2>
        <p className={styles.story__introduction}>
          {name} is een {age}-jarige {gender} uit {location}. Hij is{" "}
          {personality.personality1}, {personality.personality2}, maar vooral{" "}
          {personality.personality3}.
        </p>
      </div>
      <div className={styles.story__block}>
        <div className={styles.story__tags}>
          {Object.keys(tags).map(key => (
            <p key={key} className={styles.story__tag}>
              {tags[key]}
            </p>
          ))}
        </div>
        <p className={styles.story__author}>{name}</p>
        <h2 className={styles.story__title}>{title}</h2>

        {splitStory.map((p, key) => (
          <p key={key} className={styles.story__text}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
};

export default inject(`store`)(observer(StoryDetail));
