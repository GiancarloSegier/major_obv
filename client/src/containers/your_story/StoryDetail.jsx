import React from "react";
import styles from "./StoryDetail.module.css";
import { inject, observer } from "mobx-react";
import CharacterImage from "../../components/your_story/CharacterImage";

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
    chest,
    mouth,
    story
  } = currentStory;

  const splitStory = story.split("\r\n");

  return (
    <section id="story" className={`container ${styles.story} margin-top`}>
      <div className={styles.story__about}>
        <div className={styles.story__image}>
          <CharacterImage
            head={head}
            eyes={eyes}
            mouth={mouth}
            chest={chest}
            name={name}
          />
        </div>

        <h2 className={styles.story__author}>Over de Auteur</h2>
        <p className={styles.story__introduction}>
          {name} is een {age}-jarige {gender} uit {location}. Hij is{" "}
          {personality[0]}, {personality[1]}, maar vooral {personality[2]}.
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
