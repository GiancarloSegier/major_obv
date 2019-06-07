import React, { Component } from "react";
import styles from "./StoryPart.module.css";

class StoryPart extends Component {
  constructor(props) {
    super(props);
    this.state = { part: 1 };
    //  console.log(props.story);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.nextPart(), 5000);
  }

  nextPart = () => {
    this.currentpage = this.state.part;
    this.currentpage++;
    this.setState({ part: this.currentpage });
    console.log("bam");

    if (this.currentpage === 4) {
      clearInterval(this.timerID);
    }
  };
  render() {
    const { story } = this.props;

    const i = this.state.part;
    const part = `part${i}`;
    return (
      <div className={styles.story}>
        <h3 className={styles.story__text}> {story[part]}</h3>
        <button className={styles.story__button} onClick={this.nextPart}>
          Volgende
        </button>
      </div>
    );
  }
}

export default StoryPart;
