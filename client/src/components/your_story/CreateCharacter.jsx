import React, { Component } from "react";
import styles from "./CreateCharacter.module.css";

class CreateCharacter extends Component {
  constructor(props) {
    super(props);
    this.getValues();
    this.state = {
      index: this.min,
      part: this.props.part,
      max: this.max,
      min: this.min
    };
  }

  getIndex = index => {
    this.props.getIndex(index);
  };

  getValues = () => {
    if (this.props.gender === "vrouw") {
      this.max = 4;
      this.min = 3;

      this.setState({ index: this.min, max: this.max, min: this.min });
    } else if (this.props.gender === "man") {
      this.max = 2;
      this.min = 1;
    } else {
      this.max = 4;
      this.min = 1;
    }
  };

  getNextImage = e => {
    this.getValues();
    this.currentIndex = this.state.index;
    if (this.currentIndex === this.max) {
      this.currentIndex = this.min;
    } else {
      this.currentIndex++;
    }
    this.setState({ index: this.currentIndex });
    this.getIndex(this.currentIndex);
    this.forceUpdate();
  };

  getPreviousImage = e => {
    this.getValues();
    this.currentIndex = this.state.index;
    if (this.currentIndex === this.min) {
      this.currentIndex = this.max;
    } else {
      this.currentIndex--;
    }
    this.setState({ index: this.currentIndex });
    this.getIndex(this.currentIndex);
  };
  render() {
    this.props.getIndex(this.min);
    return (
      <div className={styles.character__imagepart}>
        <img
          src={`../assets/img/${this.state.part}/${this.state.index}.png`}
          alt="foto"
          className={styles.character__imageView}
        />
        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.buttonLeft}
            onClick={this.getPreviousImage}
          >
            Vorige!
          </button>
          <button
            type="button"
            className={styles.buttonRight}
            onClick={this.getNextImage}
          >
            Volgende!
          </button>
        </div>
      </div>
    );
  }
}

export default CreateCharacter;
