import React, { Component } from "react";
import styles from "./form.module.css";
import CreatePortrait from "./CreatePortrait";
import { inject, observer } from "mobx-react";

class CreateCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, fadeOut: false };

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
    this.setState({ fadeOut: true });
    e.preventDefault();
    setTimeout(() => {
      this.props.nextForm();
    }, 500);
  };

  render() {
    return (
      <form onSubmit={this.nextPage} className={`${styles.centerBlock}`}>
        <div
          className={
            !this.state.fadeOut
              ? `${styles.margin_left} fadeIn `
              : `${styles.margin_left} fadeOut `
          }
        >
          <h2 className={styles.part__title}>
            <span className={styles.part__step}>01</span> Jouw personage{" "}
          </h2>
          <div className={styles.centerContent}>
            <h2 className={`${styles.pageTitle}`}>
              Hallo wereld, <br />
              hier is{" "}
            </h2>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Vul de naam van je karakter in"
              ref={this.nameRef}
              required
              onChange={this.sendName}
              className={styles.inputfield}
            />
          </div>
          <div className={styles.centerButtons}>
            <button
              type="button"
              className={styles.character__open}
              onClick={() => this.setState({ visible: !this.state.visible })}
            >
              Creëer karakter
            </button>
            <button type="submit" className={styles.button}>
              Volgende
            </button>
          </div>
        </div>

        <div
          className={
            this.state.visible
              ? `${styles.character__image} ${styles.visible}`
              : `${styles.character__image}`
          }
        >
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
          <div
            className={
              this.state.visible
                ? `${styles.character__genders} ${styles.visible}`
                : `${styles.character__genders}`
            }
          >
            <input
              type="radio"
              name="gender"
              value="man"
              onChange={this.genderChange}
              required
              className={styles.gender__check}
            />
            <input
              type="radio"
              name="gender"
              value="transgender"
              onChange={this.genderChange}
              required
              className={styles.gender__check}
              defaultChecked
            />
            <input
              type="radio"
              name="gender"
              value="vrouw"
              onChange={this.genderChange}
              required
              className={styles.gender__check}
            />
          </div>
          <div className={styles.SM__buttons}>
            <button
              type="button"
              className={`${styles.character__open} ${styles.character__close}`}
              onClick={() => this.setState({ visible: !this.state.visible })}
            >
              karakter klaar
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default inject(`store`)(observer(CreateCharacter));
