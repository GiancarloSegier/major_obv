import React from "react";
import styles from "./StoryDetail.module.css";
import { inject, observer } from "mobx-react";
import CharacterImage from "../../components/your_story/CharacterImage";
import { Link } from "react-router-dom";
const nl2br = require("react-nl2br");

const StoryDetail = ({ storyId, store }) => {
  const { stories } = store;
  const currentStory = stories.find(story => story.id === storyId);

  if (!currentStory) {
    return null;
  }

  const url = window.location.href;
  const fbLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const twitterLink = `https://twitter.com/intent/tweet?url=${url}`;
  console.log(fbLink);
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

  const storyParts = [];

  nl2br(story).map(part => {
    if (!part.type) {
      storyParts.push(part);
    }
  });

  return (
    <section id="story" className={styles.story}>
      <div className={`container ${styles.story__backButton}`}>
        <Link to={`/`}>
          <button className={styles.button_back}>Alle verhalen</button>
        </Link>
      </div>

      <div className={styles.story__infoGrid}>
        <CharacterImage
          head={head}
          eyes={eyes}
          mouth={mouth}
          chest={chest}
          name={name}
        />
        <div className={styles.story__info}>
          <h2 className={styles.story__author}>Over de hoofdrol</h2>

          {gender !== "transgender" ? (
            <p className={styles.story__introduction}>
              {name} is een {age}-jarige {gender} uit {location}. {name} is{" "}
              {personality[0]}, {personality[1]}, maar vooral {personality[2]}.
            </p>
          ) : (
            <p className={styles.story__introduction}>
              {name} is {age} jaar en komt uit {location}. {name} is{" "}
              {personality[0]}, {personality[1]}, maar vooral {personality[2]}.
            </p>
          )}
          <div className={styles.story__socialMedia1}>
            <h2 className={styles.story__shareStory}>Deel dit verhaal</h2>
            <ul className={styles.social_iconslist}>
              <a href={fbLink} target="_blank" rel="noopener noreferrer">
                <li className={styles.social_facebook} />
              </a>
              <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                <li className={styles.social_twitter} />{" "}
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className={`container ${styles.story__content}`}>
        <div className={styles.story__tags}>
          {Object.keys(tags).map(key => (
            <p key={key} className={styles.story__tag}>
              {tags[key]}
            </p>
          ))}
        </div>
        <h2 className={styles.story__title}>{title}</h2>

        {storyParts.map((part, i) => (
          <p key={i} className={styles.story__text}>
            {part}
          </p>
        ))}

        <div className={styles.story__socialMedia2}>
          <h2 className={styles.story__shareStory}>Deel dit verhaal</h2>
          <ul className={styles.social_iconslist}>
            <a href={fbLink} target="_blank" rel="noopener noreferrer">
              <li className={styles.social_facebook} />
            </a>
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              <li className={styles.social_twitter} />{" "}
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default inject(`store`)(observer(StoryDetail));
