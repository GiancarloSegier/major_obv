import React, { Component } from "react";
import styles from "./Create.module.css";
import { PropTypes, inject } from "mobx-react";
import CreateCharacter from "../../components/your_story/form/CreateCharacter";
import CharacterInfo from "../../components/your_story/form/CharacterInfo";
import CharacterImage from "../../components/your_story/CharacterImage";
import CharacterPersona from "../../components/your_story/form/CharacterPersona";
import StoryInfo from "../../components/your_story/form/StoryInfo";
import StoryEditor from "../../components/your_story/form/StoryEditor";

class CreateStory extends Component {
  newStory = {};

  constructor(props) {
    super(props);
    this.state = { step: 1 };

    this.characterRef = React.createRef();
    this.characterInfoRef = React.createRef();
    console.log(this.characterInfoRef);
  }

  nextForm = () => {
    this.currentstep = this.state.step;
    this.currentstep++;
    this.setState({ step: this.currentstep });
    this.setImages();
  };

  // sets correct number for corresponding image

  setImages = () => {
    if (this.characterRef.current != null) {
      const head = this.characterRef.current.headRef.current.state.index;
      const eyes = this.characterRef.current.eyesRef.current.state.index;
      const mouth = this.characterRef.current.mouthRef.current.state.index;
      const chest = this.characterRef.current.chestRef.current.state.index;
      const gender = this.characterRef.current.gender;
      this.newStory.head = head;
      this.newStory.eyes = eyes;
      this.newStory.chest = chest;
      this.newStory.mouth = mouth;
      this.newStory.gender = gender;
    }

    console.log(this.newStory);
  };

  // send everything to the database
  handleSubmitForm = e => {
    e.preventDefault();
    this.props.store.addStory(this.newStory);
  };

  // sets correct value to correct database property

  getInfo = (dataname, value) => {
    console.log(dataname, value);
    this.newStory[dataname] = value;
    console.log(this.newStory);
  };

  render() {
    let { step } = this.state;
    console.log(step);
    console.log(this.newStory);

    return (
      <section className="container margin-top">
        <form onSubmit={this.handleSubmitForm}>
          {step === 1 ? (
            <>
              <div className={styles.splitgrid}>
                <CreateCharacter
                  ref={this.characterRef}
                  getInfo={this.getInfo}
                />
              </div>

              <button type="button" onClick={this.nextForm}>
                {" "}
                Volgende{" "}
              </button>
            </>
          ) : step >= 2 ? (
            <>
              <div className={styles.splitgrid}>
                {step === 2 ? (
                  <CharacterInfo
                    step={step}
                    name={this.newStory.name}
                    getInfo={this.getInfo}
                  />
                ) : step === 3 ? (
                  <CharacterPersona
                    step={step}
                    name={this.newStory.name}
                    getInfo={this.getInfo}
                  />
                ) : step === 4 ? (
                  <StoryInfo name={this.newStory.name} getInfo={this.getInfo} />
                ) : step === 5 ? (
                  <div>
                    <h2 className={styles.tagline}>02 Leeftijd & Locatie </h2>
                    <p className={styles.pageTitle}>
                      {" "}
                      Tijd om {this.newStory.name} op avontuur te sturen{" "}
                    </p>
                  </div>
                ) : step === 6 ? (
                  <StoryEditor step={step} getInfo={this.getInfo} />
                ) : (
                  <p>Er is iets misgelopen</p>
                )}
                <CharacterImage
                  head={this.newStory.head}
                  eyes={this.newStory.eyes}
                  mouth={this.newStory.mouth}
                  chest={this.newStory.chest}
                  name={this.newStory.name}
                  full={true}
                />
              </div>

              {step === 6 ? (
                <input type="submit" value="versturen" />
              ) : (
                <button type="button" onClick={this.nextForm}>
                  {" "}
                  Volgende{" "}
                </button>
              )}
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
