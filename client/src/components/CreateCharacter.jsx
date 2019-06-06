import React, { Component } from "react";
import styles from "./CreateCharacter.module.css";

class CreateCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 1, part: this.props.part };
  }

  getNextImage = e => {
    e.preventDefault();
    this.currentIndex = this.state.index;
    if (this.currentIndex === 4) {
      this.currentIndex = 1;
    } else {
      this.currentIndex++;
    }
    this.setState({ index: this.currentIndex });
  };

  getPreviousImage = e => {
    e.preventDefault();
    this.currentIndex = this.state.index;
    if (this.currentIndex === 1) {
      this.currentIndex = 4;
    } else {
      this.currentIndex--;
    }
    this.setState({ index: this.currentIndex });
  };
  render() {
    return (
      <div className={styles.character__imagepart}>
        <img
          src={`../assets/img/${this.state.part}/${this.state.index}.png`}
          alt="foto"
          className={styles.character__imageView}
        />
        <div className={styles.buttons}>
          <button className={styles.buttonLeft} onClick={this.getPreviousImage}>
            Vorige!
          </button>
          <button className={styles.buttonRight} onClick={this.getNextImage}>
            Volgende!
          </button>
        </div>
      </div>
    );
  }
}

export default CreateCharacter;
