import React from "react";
import styles from "./CharacterImage.module.css";

const CharacterImage = ({
  head,
  eyes,
  mouth,
  chest,
  name,
  editor = false,
  full = false
}) => {
  return (
    <div className={full ? styles.full : styles.story__image}>
      <div
        className={
          // (editor ? "editor" : " ")`${styles.story__imagepart}`

          editor ? `${styles.creator__imagepart}` : `${styles.story__imagepart}`
        }
      >
        <img
          className={styles.fullImage}
          src={`../assets/img/bodies/${chest}.png`}
          alt={`lichaam van ${name}`}
        />
      </div>
      <div
        className={
          // (editor ? "editor" : " ")`${styles.story__imagepart}`

          editor ? `${styles.creator__imagepart}` : `${styles.story__imagepart}`
        }
      >
        <img
          className={styles.fullImage}
          src={`../assets/img/mouths/${mouth}.png`}
          alt={`mond van ${name}`}
        />
      </div>
      <div
        className={
          // (editor ? "editor" : " ")`${styles.story__imagepart}`

          editor ? `${styles.creator__imagepart}` : `${styles.story__imagepart}`
        }
      >
        <img
          className={styles.fullImage}
          src={`../assets/img/eyes/${eyes}.png`}
          alt={`ogen van ${name}`}
        />
      </div>
      <div
        className={
          // (editor ? "editor" : " ")`${styles.story__imagepart}`

          editor ? `${styles.creator__imagepart}` : `${styles.story__imagepart}`
        }
      >
        <img
          className={styles.fullImage}
          src={`../assets/img/heads/${head}.png`}
          alt={`hoofd van ${name}`}
        />
      </div>
    </div>
  );
};

export default CharacterImage;
