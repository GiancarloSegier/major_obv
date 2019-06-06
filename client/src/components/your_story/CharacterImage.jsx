import React from "react";
import styles from "./CharacterImage.module.css";

const CharacterImage = ({ head, eyes, mouth, chest, name }) => {
  return (
    <div className={styles.story__image}>
      <img
        className={styles.story__imagepart}
        src={`../assets/img/bodies/${chest}.png`}
        alt={`lichaam van ${name}`}
      />
      <img
        className={styles.story__imagepart}
        src={`../assets/img/mouths/${mouth}.png`}
        alt={`mond van ${name}`}
      />
      <img
        className={styles.story__imagepart}
        src={`../assets/img/eyes/${eyes}.png`}
        alt={`ogen van ${name}`}
      />
      <img
        className={styles.story__imagepart}
        src={`../assets/img/heads/${head}.png`}
        alt={`hoofd van ${name}`}
      />
    </div>
  );
};

export default CharacterImage;
