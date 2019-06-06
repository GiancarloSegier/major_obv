import React from "react";
import styles from "./Create.module.css";
import CreateCharacter from "../../components/your_story/CreateCharacter";

const CreateStory = () => {
  const headRef = React.createRef();
  const eyesRef = React.createRef();
  const mouthRef = React.createRef();
  const bodyRef = React.createRef();

  const getImageNumber = value => {
    console.log(bodyRef.current.props);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    console.log(
      bodyRef.current.props.part + ": " + bodyRef.current.currentIndex
    );
    console.log(
      mouthRef.current.props.part + ": " + mouthRef.current.currentIndex
    );
    console.log(
      eyesRef.current.props.part + ": " + eyesRef.current.currentIndex
    );
    console.log(
      headRef.current.props.part + ": " + headRef.current.currentIndex
    );
  };

  return (
    <section className="container margin-top">
      <form onSubmit={handleSubmitForm}>
        <div className={styles.splitgrid}>
          <h2 className={styles.pageTitle}>Hallo wereld, hier is </h2>
          <div className={styles.character__image}>
            <CreateCharacter
              part="bodies"
              getIndex={getImageNumber}
              ref={bodyRef}
            />
            <CreateCharacter
              part="mouths"
              getIndex={getImageNumber}
              ref={mouthRef}
            />
            <CreateCharacter
              part="eyes"
              getIndex={getImageNumber}
              ref={eyesRef}
            />
            <CreateCharacter
              part="heads"
              getIndex={getImageNumber}
              ref={headRef}
            />
          </div>
        </div>

        <button type="submit" value="toevoegen">
          Toevoegen
        </button>
      </form>
    </section>
  );
};

export default CreateStory;
