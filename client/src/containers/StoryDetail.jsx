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
    nose,
    mouth,
    story
  } = currentStory;

  const splitStory = story.split("\r\n");
  console.log(splitStory);

  return (
    <section id="story" className={`container ${styles.story}`}>
      <div className={styles.story__about}>
        <div className={styles.story__image}>
          <img
            className={styles.story__imagepart}
            src={`../assets/heads/head${head}.jpg`}
            alt={`hoofd van het personage`}
          />
          <img
            className={styles.story__imagepart}
            src={`../assets/eyes/eyes${eyes}.jpg`}
            alt={`ogen van het personage`}
          />
          <img
            className={styles.story__imagepart}
            src={`../assets/noses/nose${nose}.jpg`}
            alt={`neus van het personage`}
          />
          <img
            className={styles.story__imagepart}
            src={`../assets/mouths/mouth${mouth}.jpg`}
            alt={`mond van het personage`}
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

        {splitStory.map(p => (
          <p className={styles.story__text}>{p}</p>
        ))}
      </div>
    </section>
  );
};

export default inject(`store`)(observer(StoryDetail));
