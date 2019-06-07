import React, { Component } from "react";
import styles from "./Create.module.css";
import { PropTypes, inject } from "mobx-react";
import CreateCharacter from "../../components/your_story/form/CreateCharacter";
import CharacterInfo from "../../components/your_story/form/CharacterInfo";
import CharacterImage from "../../components/your_story/CharacterImage";

class CreateStory extends Component {
  newStory = {};

  constructor(props) {
    super(props);
    this.state = { step: 1 };

    this.characterRef = React.createRef();
    console.log(this.characterRef.getInputs);
  }

  nextForm = () => {
    this.currentstep = this.state.step;
    this.currentstep++;
    this.setState({ step: this.currentstep });
    this.setValues();
  };

  setValues = () => {
    if (this.characterRef.current != null) {
      const head = this.characterRef.current.headRef.current.state.index;
      const eyes = this.characterRef.current.eyesRef.current.state.index;
      const mouth = this.characterRef.current.mouthRef.current.state.index;
      const chest = this.characterRef.current.chestRef.current.state.index;
      const name = this.characterRef.current.nameRef.current.value;
      const gender = this.characterRef.current.gender;
      this.newStory.head = head;
      this.newStory.eyes = eyes;
      this.newStory.chest = chest;
      this.newStory.mouth = mouth;
      this.newStory.name = name;
      this.newStory.gender = gender;
    }

    console.log(this.newStory);
  };

  // send everything to the database
  handleSubmitForm = e => {
    console.log(this.story.nameRef.current.value);
    e.preventDefault();

    if (this.story.nameRef.current.value) {
      this.props.store.addStory({
        title: "test",
        name: this.newStory.name,
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
        gender: this.newStory.gender,
        head: this.newStory.head,
        eyes: this.newStory.eyes,
        chest: this.newStory.chest,
        mouth: this.newStory.mouth,
        story: "blablablablalbalblalbalbal"
      });
    }
  };

  render() {
    let { step } = this.state;

    return (
      <section className="container margin-top">
        <form onSubmit={this.handleSubmitForm}>
          {step === 1 ? (
            <>
              <div className={styles.splitgrid}>
                <CreateCharacter ref={this.characterRef} />
              </div>
              <input type="button" value="volgende" onClick={this.nextForm} />
            </>
          ) : step >= 2 ? (
            <>
              <div className={styles.splitgrid}>
                <CharacterInfo newStory={this.newStory} />
                <CharacterImage
                  head={this.newStory.head}
                  eyes={this.newStory.eyes}
                  mouth={this.newStory.mouth}
                  chest={this.newStory.chest}
                />
              </div>
              <input type="button" value="volgende" onClick={this.nextForm} />
            </>
          ) : (
            ""
          )}
        </form>
      </section>
    );
  }
}

CreateStory.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(CreateStory);
