import React, { Component } from "react";
import styles from "./form.module.css";
import { inject, observer } from "mobx-react";
import Hints from "./Hints";
class StoryEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { textareaLength: 60, openHints: false };
    this.textRef = React.createRef();
    this.hints = this.props.store.hints;
  }

  sendInfo = (dataname, value) => {
    this.props.store.getInfo(dataname, value);
  };

  //   //Make sure that the output of the title has a capital first letter
  sendTitle = e => {
    this.title = e.currentTarget.value;
    this.titleCapitalized =
      this.title.charAt(0).toUpperCase() + this.title.slice(1);
    this.sendInfo("title", this.titleCapitalized);
  };

  submitStory = e => {
    e.preventDefault();
    this.props.submitForm(e);
  };

  changeHeight = e => {
    this.currentHeight = this.textRef.current.scrollHeight;
    this.sendInfo("story", e.currentTarget.value);
    if (this.props.store.customStory["story"] === "") {
      this.setState({ textareaLength: 60 });
    } else {
      this.setState({ textareaLength: this.currentHeight });
    }
    this.textRef.current.style.height = this.state.textareaLength + "px";
    console.log(e.currentTarget.value);
  };

  render() {
    return (
      <>
        <form
          onSubmit={this.submitStory}
          className={`${styles.editorGrid} fadeIn`}
        >
          <div className={styles.SM__editor_buttons}>
            <button
              type="button"
              className={styles.hintButton}
              onClick={() =>
                this.setState({ openHints: !this.state.openHints })
              }
            />
            <button type="submit" className={styles.saveButton} />
          </div>
          <div className={styles.textEditor}>
            <h2 className={styles.part__title}>
              <span className={styles.part__step}>05</span> Jouw verhaal
            </h2>

            <input
              className={styles.titleField}
              name="title"
              id="title"
              required
              placeholder="Schrijf hier je titel"
              onChange={this.sendTitle}
            />
            <textarea
              className={styles.textField}
              name="story"
              id="story"
              required
              ref={this.textRef}
              placeholder="Hier begint jouw verhaal. Een duwtje in de rug nodig? Je vindt hiernaast inspiratie om je op weg te helpen. "
              // onChange={e => sendInfo("story", e.currentTarget.value)}
              onChange={this.changeHeight}
            />
          </div>

          <div
            className={
              this.state.openHints
                ? `${styles.hints} ${styles.openHints}`
                : `${styles.hints}`
            }
          >
            <button
              onClick={() =>
                this.setState({ openHints: !this.state.openHints })
              }
              className={styles.close}
            />
            <Hints />
          </div>
        </form>
      </>
    );
  }
}

export default inject(`store`)(observer(StoryEditor));
