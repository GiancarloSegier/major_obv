import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import StoryPart from "../components/StoryPart";
import StoryTimeline from "../components/StoryTimeline";
import styles from "../containers/CharacterStory.module.css";

class CharacterStory extends Component {
  constructor(props) {
    super(props);
    this.state = { part: 0 };
  }

  goToNextPart = () => {
    this.currentpage = this.state.part;
    this.currentpage++;
    this.setState({ part: this.currentpage });
    console.log("bam");
  };

  render() {
    const { characterId, store } = this.props;
    const { characters } = store;

    const current = characters.find(character => character.id === characterId);
    if (!current) {
      return null;
    }

    return (
      <div className={styles.background}>
        <div className="container full_view">
          <StoryPart
            state={this.state}
            story={current.story}
            handleClick={this.goToNextPart}
          />
          <StoryTimeline state={this.state} story={current.story} />
        </div>
      </div>
    );
  }
}

export default inject(`store`)(observer(CharacterStory));
