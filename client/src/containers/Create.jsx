import React from "react";
import styles from "./Create.module.css";
import CreateCharacter from "../components/CreateCharacter";

const Create = () => {
  return (
    <section className="container margin-top">
      <div className={styles.splitgrid}>
        <h2 className={styles.pageTitle}>Hallo wereld, hier is</h2>
        <div className={styles.character__image}>
          <CreateCharacter part="bodies" />
          <CreateCharacter part="mouths" />
          <CreateCharacter part="eyes" />
          <CreateCharacter part="heads" />
        </div>
      </div>
    </section>
  );
};

export default Create;
