import React, { Component } from "react";
import styles from "./form.module.css";
import CreatePortrait from "./CreatePortrait";

class CreateCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.index = 1;
    this.gender = "";

    this.headRef = React.createRef();
    this.eyesRef = React.createRef();
    this.mouthRef = React.createRef();
    this.chestRef = React.createRef();
    this.nameRef = React.createRef();
  }

  getInputs = () => {
    this.chest = this.chestRef.current.value;
    this.eyes = this.eyesRef.current.value;
    this.mouth = this.mouthRef.current.value;
    this.head = this.headRef.current.value;

    return this.chest, this.head, this.eyes, this.mouth;
  };

  // get the correct imagenumber for the portrait

  getImageNumber = value => {
    this.index = value;
  };

  // check the gender after it was changed
  genderChange = e => {
    this.gender = e.currentTarget.value;
    console.log(this.gender);
    this.chestRef.current.setGender(this.gender);
    this.eyesRef.current.setGender(this.gender);
    this.mouthRef.current.setGender(this.gender);
    this.headRef.current.setGender(this.gender);
  };

  render() {
    return (
      <>
        <div>
          <p>01 Jouw personage </p>
          <h2 className={styles.pageTitle}>Hallo wereld, hier is </h2>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Vul de naam van je karakter in"
            ref={this.nameRef}
            required
          />
        </div>
        <div className={styles.character__image}>
          <CreatePortrait
            part="bodies"
            getIndex={this.getImageNumber}
            gender={this.gender}
            ref={this.chestRef}
          />
          <CreatePortrait
            part="mouths"
            getIndex={this.getImageNumber}
            gender={this.gender}
            ref={this.mouthRef}
          />
          <CreatePortrait
            part="eyes"
            getIndex={this.getImageNumber}
            gender={this.gender}
            ref={this.eyesRef}
          />
          <CreatePortrait
            part="heads"
            getIndex={this.getImageNumber}
            gender={this.gender}
            ref={this.headRef}
          />
          <div className={styles.character__gender}>
            <input
              type="radio"
              name="gender"
              value="man"
              onChange={this.genderChange}
              required
            />
            man
            <input
              type="radio"
              name="gender"
              value="vrouw"
              onChange={this.genderChange}
              required
            />
            vrouw
            <input
              type="radio"
              name="gender"
              value="transgender"
              onChange={this.genderChange}
              required
            />
            transgender
          </div>
        </div>
      </>
    );
  }
}

export default CreateCharacter;
