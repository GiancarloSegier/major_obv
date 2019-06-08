import React, { Component } from "react";
import styles from "./form.module.css";
import CreatePortrait from "./CreatePortrait";
import { inject, observer } from "mobx-react";

class CreateCharacter extends Component {
  constructor(props) {
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
  };
  sendInfo = (dataname, value) => {
    this.props.store.getInfo(dataname, value);
    console.log(this.props.store.customStory);
  };

  // check the gender after it was changed
  genderChange = e => {
    this.gender = e.currentTarget.value;
    this.chestRef.current.wrappedInstance.setGender(this.gender);
    this.headRef.current.wrappedInstance.setGender(this.gender);
    this.mouthRef.current.wrappedInstance.setGender(this.gender);
    this.eyesRef.current.wrappedInstance.setGender(this.gender);
  };

  nextPage = e => {
    e.preventDefault();
    this.props.nextForm();
  };

  render() {
    return (
      <form onSubmit={this.nextPage}>
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
            dataname="chest"
            gender={this.gender}
            ref={this.chestRef}
          />
          <CreatePortrait
            part="mouths"
            dataname="mouth"
            gender={this.gender}
            ref={this.mouthRef}
          />
          <CreatePortrait
            part="eyes"
            dataname="eyes"
            gender={this.gender}
            ref={this.eyesRef}
          />
          <CreatePortrait
            part="heads"
            dataname="head"
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
              value="transgender"
              onChange={this.genderChange}
              required
              defaultChecked
            />
            transgender
            <input
              type="radio"
              name="gender"
              value="vrouw"
              onChange={this.genderChange}
              required
            />
            vrouw
          </div>
        </div>
        <button type="submit">Volgende</button>
      </form>
    );
  }
}

export default inject(`store`)(observer(CreateCharacter));
