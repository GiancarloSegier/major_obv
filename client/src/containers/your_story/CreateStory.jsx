import React from "react";
import styles from "./Create.module.css";
import CreateCharacter from "../../components/your_story/CreateCharacter";
import { PropTypes, inject } from "mobx-react";

const CreateStory = ({ store }) => {
  let index = 1;
  let gender;
  const headRef = React.createRef();
  const eyesRef = React.createRef();
  const mouthRef = React.createRef();
  const chestRef = React.createRef();
  const nameRef = React.createRef();

  const getImageNumber = value => {
    index = value;
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    if (nameRef.current.value) {
      store.addStory({
        title: "test",
        name: nameRef.current.value,
        tags: {
          tag1: "positief",
          tag2: "grappig"
        },
        location: "ergens en nergens",
        age: "25",
        personality: {
          personality1: "lief",
          personality2: "zorgzaam",
          personality3: "grappig"
        },
        gender: gender,
        head: headRef.current.state.index,
        eyes: eyesRef.current.state.index,
        chest: chestRef.current.state.index,
        mouth: mouthRef.current.state.index,
        story: "blablablablalbalblalbalbal"
      });
    }
  };

  const genderChange = e => {
    gender = e.currentTarget.value;
  };

  return (
    <section className="container margin-top">
      <form onSubmit={handleSubmitForm}>
        <div className={styles.splitgrid}>
          <div>
            <h2 className={styles.pageTitle}>Hallo wereld, hier is </h2>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Vul de naam van je karakter in"
              ref={nameRef}
            />
          </div>
          <div className={styles.character__image}>
            <CreateCharacter
              part="bodies"
              getIndex={getImageNumber}
              gender={gender}
              ref={mouthRef}
            />
            <CreateCharacter
              part="mouths"
              getIndex={getImageNumber}
              gender={gender}
              ref={chestRef}
            />
            <CreateCharacter
              part="eyes"
              getIndex={getImageNumber}
              gender={gender}
              ref={eyesRef}
            />
            <CreateCharacter
              part="heads"
              getIndex={getImageNumber}
              gender={gender}
              ref={headRef}
            />
            <div className={styles.character__gender}>
              <input
                type="radio"
                name="gender"
                value="man"
                onChange={genderChange}
              />
              man
              <input
                type="radio"
                name="gender"
                value="vrouw"
                defaultChecked
                onChange={genderChange}
              />
              vrouw
              <input
                type="radio"
                name="gender"
                value="transgender"
                onChange={genderChange}
              />
              transgender
            </div>
          </div>
        </div>

        <input type="submit" value="toevoegen" />
      </form>
    </section>
  );
};

CreateStory.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(CreateStory);
