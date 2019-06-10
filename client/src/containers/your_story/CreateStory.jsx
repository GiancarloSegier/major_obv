import React, { Component } from "react";
import styles from "./CreateStory.module.css";
import { PropTypes, inject } from "mobx-react";
import CreateCharacter from "../../components/your_story/form/CreateCharacter";
import CharacterInfo from "../../components/your_story/form/CharacterInfo";
import CharacterImage from "../../components/your_story/CharacterImage";
import CharacterPersona from "../../components/your_story/form/CharacterPersona";
import StoryInfo from "../../components/your_story/form/StoryInfo";
import StoryEditor from "../../components/your_story/form/StoryEditor";
import CreateTimeline from "../../components/your_story/CreateTimeline";
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
    // this.props.history.push(
    //   `/story/${
    //     this.props.store.stories.find(story => story.title === title).id
    //   }`
    // );
  };

  render() {
    let { step } = this.state;
    const { customStory } = this.props.store;
    return (
      <>
        {step < 6 ? <CreateTimeline step={step} /> : " "}

        <section className={`container ${styles.margin_top}`}>
          {step === 1 ? (
            <>
              <div className={styles.split_grid}>
                <CreateCharacter
                  ref={this.characterRef}
                  nextForm={this.nextForm}
                />
              </div>
            </>
          ) : (
            <>
              <div className={styles.split_grid}>
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
                  <div className={styles.margin_left}>
                    <h2 className={`${styles.part__title} `}>
                      <span className={styles.part__step}>05</span> Leeftijd &
                      Locatie{" "}
                    </h2>
                    <p className={`${styles.pageTitle}`}>
                      {" "}
                      Tijd om {customStory.name} op avontuur te sturen{" "}
                    </p>
                    <button onClick={this.nextForm} className={styles.button}>
                      volgende
                    </button>
                  </div>
                ) : step === 6 ? (
                  <StoryEditor step={step} submitForm={this.handleSubmitForm} />
                ) : (
                  <p>Er is iets misgelopen</p>
                )}
              </div>
              {step !== 6 ? (
                <CharacterImage
                  head={customStory.head}
                  eyes={customStory.eyes}
                  mouth={customStory.mouth}
                  chest={customStory.chest}
                  name={customStory.name}
                  full={true}
                />
              ) : (
                ""
              )}
            </>
          )}
        </section>
      </>
    );
  }
}

CreateStory.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(CreateStory);
