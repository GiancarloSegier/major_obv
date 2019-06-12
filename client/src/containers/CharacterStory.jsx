import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import StoryPart from "../components/StoryPart";
import StoryEnd from "../components/StoryEnd";
import StoryTimeline from "../components/StoryTimeline";
import styles from "../containers/CharacterStory.module.css";
import music from "../styles/assets/sounds/background1.mp3";

import Sound from "react-sound";
import { get } from "https";

//

class CharacterStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      part: 0,
      show: true,
      music: Sound.status.STOPPED,
      volume: 100
    };
    this.audioRef = React.createRef();
  }

  componentDidMount() {
    if (music !== null) {
      this.setState({ music: Sound.status.PLAYING, volume: 100 });
    }
    document.body.classList.add("navigation-hidden");
  }

  componentWillUnmount() {
    document.body.classList.remove("navigation-hidden");
  }
  changetext = () => {
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
  handleGoBack = () => {
    this.setState({ music: Sound.status.STOPPED });
  };

  toggleSound = () => {
    if (this.state.volume === 100) {
      this.setState({ volume: 0 });
    }
    if (this.state.volume === 0) {
      this.setState({ volume: 100 });
    }
  };

  render() {
    const { characterId, store } = this.props;
    const { characters } = store;

    const current = characters.find(character => character.id === characterId);

    if (!current) {
      return null;
    }

    if (current) {
      if (this.state.part === current.story.parts.length) {
        console.log("the end");
      }
    }

    return (
      <>
        {music !== null ? (
          <Sound
            url={"/assets/sounds/background1.mp3"}
            playStatus={this.state.music}
            volume={this.state.volume}
          />
        ) : (
          " "
        )}
        <div className={styles.background}>
          <div className="container full_view">
            <div className={styles.flexer}>
              <p className={styles.storyname}>{current.name}'s verhaal</p>
              <Link to={`/character/${characterId}`}>
                <button onClick={this.handleGoBack} className={styles.close} />
              </Link>
            </div>

            {this.state.part < current.story.parts.length ? (
              <StoryPart
                state={this.state}
                story={current.story}
                handleClick={this.goToNextPart}
              />
            ) : (
              <StoryEnd />
            )}

            <div className={styles.flexer}>
              <StoryTimeline state={this.state} story={current.story} />
              <div onClick={this.toggleSound} className={styles.mute}>
                <div className={styles.mutebars}>
                  <div
                    className={`${styles.rect} ${styles.rect1} ${
                      this.state.volume === 100 ? "" : styles.no_animation
                    }`}
                  />
                  <div
                    className={`${styles.rect} ${styles.rect2} ${
                      this.state.volume === 100 ? "" : styles.no_animation
                    }`}
                  />
                  <div
                    className={`${styles.rect} ${styles.rect3} ${
                      this.state.volume === 100 ? "" : styles.no_animation
                    }`}
                  />
                  <div
                    className={`${styles.rect} ${styles.rect4} ${
                      this.state.volume === 100 ? "" : styles.no_animation
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
