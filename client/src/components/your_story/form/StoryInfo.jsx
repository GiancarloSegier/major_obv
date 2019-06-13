import React, { Component } from "react";
import styles from "./form.module.css";
import { inject, observer } from "mobx-react";

const basicTags = [
  "Romantisch",
  "Waargebeurd",
  "Ontroerend",
  "Spannend",
  "Gek",
  "Mysterieus",
  "Grappig",
  "Avontuurlijk",
  "Onverwacht",
  "Actievol"
];

// const StoryInfo = ({ name, nextForm, store }) => {
class StoryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, fadeOut: false };
    this.tags = [];
  }

  setTags = e => {
    if (e.currentTarget.checked) {
      this.tags.push(e.currentTarget.value);
    } else {
      if (this.tags.includes(e.currentTarget.value)) {
        for (var i = 0; i < this.tags.length; i++) {
          if (this.tags[i] === e.currentTarget.value) {
            this.tags.splice(i, 1);
          }
        }
      }
    }
    this.props.store.getInfo("tags", this.tags);
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
            <span className={styles.part__step}>04</span> Genres{" "}
          </h2>
          <div>
            <p className={styles.pageTitle}>
              {this.props.name}'s <br /> verhaal is
            </p>
            <div className={styles.tags}>
              {basicTags.map((tag, i) => (
                <label key={i} className={styles.tag}>
                  <input
                    type="checkbox"
                    id={`tag${i}`}
                    onClick={this.setTags}
                    value={`#${tag}`}
                    className={styles.tag__input}
                  />
                  <div className={styles.tag__checkBox}>{tag}</div>
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Volgende
          </button>
        </div>
      </form>
    );
  }
}

export default inject(`store`)(observer(StoryInfo));
