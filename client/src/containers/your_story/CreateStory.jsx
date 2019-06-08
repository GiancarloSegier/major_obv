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
  constructor(props) {
    super(props);
    this.state = { step: 1 };

    this.characterRef = React.createRef();
    this.characterInfoRef = React.createRef();
  }

  nextForm = () => {
    this.currentstep = this.state.step;
    this.currentstep++;
    this.setState({ step: this.currentstep });
  };

  // send everything to the database
  handleSubmitForm = e => {
    e.preventDefault();
    const title = this.props.store.customStory.title;

    this.props.store.addStory(this.props.store.customStory);
    console.log(
      this.props.store.stories.find(story => story.title === title).id
    );
    this.props.history.push(
      `/story/${
        this.props.store.stories.find(story => story.title === title).id
      }`
    );
  };

  render() {
    let { step } = this.state;
    const { customStory } = this.props.store;
    return (
      <section className="container margin-top">
        {step === 1 ? (
          <>
            <div className={styles.splitgrid}>
              <CreateCharacter
                ref={this.characterRef}
                nextForm={this.nextForm}
              />
            </div>
          </>
        ) : (
          <>
            <div className={styles.splitgrid}>
              {step === 2 ? (
                <CharacterInfo
                  step={step}
                  name={customStory.name}
                  nextForm={this.nextForm}
                />
              ) : step === 3 ? (
                <CharacterPersona
                  step={step}
                  name={customStory.name}
                  nextForm={this.nextForm}
                />
              ) : step === 4 ? (
                <StoryInfo name={customStory.name} nextForm={this.nextForm} />
              ) : step === 5 ? (
                <div>
                  <h2 className={styles.tagline}>02 Leeftijd & Locatie </h2>
                  <p className={styles.pageTitle}>
                    {" "}
                    Tijd om {customStory.name} op avontuur te sturen{" "}
                  </p>
                  <button onClick={this.nextForm}>volgende</button>
                </div>
              ) : step === 6 ? (
                <StoryEditor step={step} submitForm={this.handleSubmitForm} />
              ) : (
                <p>Er is iets misgelopen</p>
              )}
              <CharacterImage
                head={customStory.head}
                eyes={customStory.eyes}
                mouth={customStory.mouth}
                chest={customStory.chest}
                name={customStory.name}
                full={true}
              />
            </div>
          </>
        )}
      </section>
    );
  }
}

CreateStory.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(CreateStory);
