import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import StoryPart from "../components/StoryPart";
import StoryTimeline from "../components/StoryTimeline";
import styles from "../containers/CharacterStory.module.css";

class CharacterStory extends Component {
  constructor(props) {
    super(props);
    this.state = { part: 0, show: true, music: true };
  }

  clearAuto = () => {
    clearInterval(this.timerAuto);
  };
  lauchSounds = () => {};
  componentDidMount = () => {
    console.log("component mount");

    this.timerAuto = setInterval(this.goToNextPart, 10000);
    // this.timerClearAuto = setInterval(this.clearAuto, 128000);
  };
  hide = () => {
    this.setState({ show: false });
    clearInterval(this.timerHide);
  };
  show = () => {
    this.setState({ show: true });
    clearInterval(this.timerShow);
  };
  changetext = () => {
    console.log("change text");
    this.currentpage = this.state.part;
    this.currentpage++;
    this.setState({ part: this.currentpage });
    clearInterval(this.timerText);
  };

  goToNextPart = () => {
    if (!this.justClicked) {
      this.justClicked = true;
      this.timerHide = setInterval(this.hide, 100);
      this.timerText = setInterval(this.changetext, 500);
      this.timerShow = setInterval(this.show, 700);
      this.justClickedTimeout = setTimeout(() => {
        this.justClicked = false;
      }, 500);
    }
  };

  render() {
    const { characterId, store } = this.props;
    const { characters } = store;

    const current = characters.find(character => character.id === characterId);
    if (!current) {
      return null;
    }
    if (this.state.part === 15) {
      console.log("ting");
      this.clearAuto();
    }

    return (
      <>
        <div className={styles.background}>
          <div className="container full_view">
            <StoryPart
              state={this.state}
              story={current.story}
              handleClick={this.goToNextPart}
            />
            <StoryTimeline state={this.state} story={current.story} />
          </div>
        </div>
      </>
    );
  }
}

export default inject(`store`)(observer(CharacterStory));
