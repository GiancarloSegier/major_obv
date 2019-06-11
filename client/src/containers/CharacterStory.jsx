import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import StoryPart from "../components/StoryPart";
import StoryTimeline from "../components/StoryTimeline";
import styles from "../containers/CharacterStory.module.css";
import clicksound from "../styles/assets/sounds/click.wav";
import backgroundsound from "../styles/assets/sounds/background1.mp3";
//
const click = new Audio(clicksound);
const background = new Audio(backgroundsound);

class CharacterStory extends Component {
  constructor(props) {
    super(props);
    this.state = { part: 0, show: true, music: true };
  }

  clearAuto = () => {
    clearInterval(this.timerAuto);
  };
  lauchSounds = () => {};
  componentWillMount = () => {
    window.document.body.classList.add("navigation-hidden");
    console.log("component mount");
    this.playMusic();
  };
  componentWillUnmount = () => {
    window.document.body.classList.remove("navigation-hidden");
  };
  componentDidMount = () => {
    // this.timerAuto = setInterval(this.goToNextPart, 10000);
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

  playMusic = () => {
    if (this.state.music === true) {
      console.log("play");
      background.play();
    } else {
      console.log("pause");
      background.pause();
    }
  };

  goToNextPart = () => {
    if (!this.justClicked) {
      click.play();
      this.justClicked = true;
      this.timerHide = setInterval(this.hide, 100);
      this.timerText = setInterval(this.changetext, 500);
      this.timerShow = setInterval(this.show, 700);
      this.justClickedTimeout = setTimeout(() => {
        this.justClicked = false;
      }, 500);
    }
  };
  handleGoBack = () => {
    // console.log("testere");
    // background.pause();
  };

  toggleSound = () => {
    this.setState({ music: !this.state.music });
    this.playMusic();
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
            <div className={styles.flexer}>
              <p className={styles.storyname}>{current.name}'s verhaal</p>
              <Link
                onClick={this.handleGoBack()}
                to="/character/5cf78413e35fc80995d4ebce"
              >
                <button className={styles.close} />
              </Link>
            </div>

            <StoryPart
              state={this.state}
              story={current.story}
              handleClick={this.goToNextPart}
            />
            <div className={styles.flexer}>
              <StoryTimeline state={this.state} story={current.story} />
              <div onClick={this.toggleSound} className={styles.mute}>
                <div className={styles.mutebars}>
                  <div
                    className={`${styles.rect} ${styles.rect1} ${
                      !this.state.music ? "" : styles.no_animation
                    }`}
                  />
                  <div
                    className={`${styles.rect} ${styles.rect2} ${
                      !this.state.music ? "" : styles.no_animation
                    }`}
                  />
                  <div
                    className={`${styles.rect} ${styles.rect3} ${
                      !this.state.music ? "" : styles.no_animation
                    }`}
                  />
                  <div
                    className={`${styles.rect} ${styles.rect4} ${
                      !this.state.music ? "" : styles.no_animation
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default inject(`store`)(observer(CharacterStory));
