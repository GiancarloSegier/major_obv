import React, { Component } from "react";
import styles from "./form.module.css";
import CreatePortrait from "./CreatePortrait";

class CreateCharacter extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {};

    this.index = 1;
    this.gender = "transgender";

    this.headRef = React.createRef();
    this.eyesRef = React.createRef();
    this.mouthRef = React.createRef();
    this.chestRef = React.createRef();
  }

  //Make sure that the output of the name has a capital first letter
  sendName = e => {
    const name = e.currentTarget.value;
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
    this.sendInfo("name", nameCapitalized);
    console.log(nameCapitalized);
  };
  sendInfo = (dataname, value) => {
    this.props.getInfo(dataname, value);
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
            onChange={this.sendName}
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
              defaultChecked
            />
            transgender
          </div>
        </div>
      </>
    );
  }
}

export default CreateCharacter;
