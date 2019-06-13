import React, { Component } from "react";
import styles from "./form.module.css";
import { inject, observer } from "mobx-react";

class CharacterInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, fadeOut: false };
  }
  sendInfo = (dataname, value) => {
    this.props.store.getInfo(dataname, value);
    console.log(this.props.store.customStory);
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
      <form
        onSubmit={this.nextPage}
        className={
          !this.state.fadeOut
            ? `${styles.fullForm} fadeIn `
            : `${styles.fullForm} fadeOut `
        }
      >
        <div className={styles.margin_left}>
          <h2 className={styles.part__title}>
            <span className={styles.part__step}>02</span> Leeftijd & Locatie{" "}
          </h2>
          <div>
            <p className={`${styles.pageTitle}`}>
              {this.props.store.customStory.name} is
              <br />
              <input
                className={styles.inputfield}
                type="number"
                id="age"
                min="1"
                required
                placeholder="Vul leeftijd in"
                onChange={e => this.sendInfo("age", e.currentTarget.value)}
              />{" "}
              jaar oud <br />
              en woont in
              <input
                className={styles.inputfield}
                type="text"
                id="location"
                required
                placeholder="Vul een locatie in"
                onChange={e => this.sendInfo("location", e.currentTarget.value)}
              />
            </p>
          </div>
          <button type="submit" className={styles.button}>
            Volgende
          </button>
        </div>
      </form>
    );
  }
}

export default inject(`store`)(observer(CharacterInfo));
