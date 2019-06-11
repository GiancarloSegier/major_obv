import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import StoryPart from "../components/StoryPart";
import StoryTimeline from "../components/StoryTimeline";
import styles from "../containers/CharacterStory.module.css";
import music from "../styles/assets/sounds/background1.mp3";

//

class CharacterStory extends Component {
  constructor(props) {
    super(props);
    this.state = { part: 0, show: true, music: true };
    this.audioRef = React.createRef();
    this.background = new Audio(music);
  }

  componentDidMount() {
    setTimeout(() => this.playFirst(), 500);
    console.log("mounted");
    // window.addEventListener("onbeforeunload", this.reset());
  }

  reset = () => {
    console.log("reset");
    this.lauchSounds();
  };

  lauchSounds = () => {
    console.log(this.state.music);
    const timerId = setInterval(this.playFirst(), 1000);
  };

  playFirst = () => {
    this.background.play();
    clearInterval(this.timerId);
  };
  changetext = () => {
    this.currentpage = this.state.part;
    this.currentpage++;
    this.setState({ part: this.currentpage });
    clearInterval(this.timerText);
  };

  playMusic = () => {
    console.log("test", this.state.music);
    if (this.state.music === false) {
      console.log("play");
      this.background.play();
    } else {
      console.log("pause");
      this.background.pause();
    }
  };

  goToNextPart = () => {
    if (!this.justClicked) {
      // click.play();
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
    this.background.pause();
  };

  toggleSound = () => {
    this.setState({ music: !this.state.music });

    console.log(this.state.music);
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
    }

    return (
      <>
        <div className={styles.background}>
          <div className="container full_view">
            <div className={styles.flexer}>
              <p className={styles.storyname}>{current.name}'s verhaal</p>
              <Link to={`/character/${characterId}`}>
                <button onClick={this.handleGoBack} className={styles.close} />
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
                      this.state.music ? "" : styles.no_animation
                    }`}
                  />
                  <div
                    className={`${styles.rect} ${styles.rect2} ${
                      this.state.music ? "" : styles.no_animation
                    }`}
                  />
                  <div
                    className={`${styles.rect} ${styles.rect3} ${
                      this.state.music ? "" : styles.no_animation
                    }`}
                  />
                  <div
                    className={`${styles.rect} ${styles.rect4} ${
                      this.state.music ? "" : styles.no_animation
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
