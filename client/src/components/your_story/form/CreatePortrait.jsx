import React, { Component } from "react";
import styles from "./CreatePortrait.module.css";
import { inject, observer } from "mobx-react";

class CreatePortrait extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: this.props.gender,
      index: 1,
      part: this.props.part,
      max: 4,
      min: 1
    };
    this.props.store.getInfo("gender", this.props.gender);
  }

  setImageIndex = (dataname, index) => {
    this.props.store.getInfo(dataname, index);
  };

  setGender = gender => {
    this.setState({ gender: gender });
    this.getValues(gender);
    this.props.store.getInfo("gender", gender);
  };

  getValues = gender => {
    if (gender === "vrouw") {
      this.max = 4;
      this.min = 3;
      this.setState({
        index: this.min,
        max: this.max,
        min: this.min
      });
      this.imageNumber = this.min;
    } else if (gender === "man") {
      this.max = 2;
      this.min = 1;
      this.setState({
        index: this.min,
        max: this.max,
        min: this.min
      });
      this.imageNumber = this.min;
    } else if (gender === "transgender") {
      this.max = 4;
      this.min = 1;
      this.setState({
        index: this.min,
        max: this.max,
        min: this.min
      });
      this.imageNumber = this.min;
    }
  };

  getNextImage = e => {
    this.currentIndex = this.state.index;
    if (this.currentIndex === this.state.max) {
      this.currentIndex = this.state.min;
    } else {
      this.currentIndex++;
    }
    this.setState({ index: this.currentIndex });
    this.setImageIndex(this.props.dataname, this.currentIndex);
  };

  getPreviousImage = e => {
    this.currentIndex = this.state.index;
    if (this.currentIndex === this.state.min) {
      this.currentIndex = this.state.max;
    } else {
      this.currentIndex--;
    }
    this.setState({ index: this.currentIndex });
    this.setImageIndex(this.props.dataname, this.currentIndex);
  };

  render() {
    this.imageNumber = this.state.index;
    this.setImageIndex(this.props.dataname, this.imageNumber);
    return (
      <div className={styles.character__imagepart}>
        <img
          src={`../assets/img/${this.state.part}/${this.imageNumber}.png`}
          alt="foto"
          className={styles.character__imageView}
        />
        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.buttonLeft}
            onClick={this.getPreviousImage}
          />
          <button
            type="button"
            className={styles.buttonRight}
            onClick={this.getNextImage}
          />
        </div>
      </div>
    );
  }
}

export default inject(`store`)(observer(CreatePortrait));
