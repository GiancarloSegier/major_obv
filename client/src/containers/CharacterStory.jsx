import React from "react";
import { inject, observer } from "mobx-react";
import StoryPart from "../components/StoryPart";
import StoryTimeline from "../components/StoryTimeline";

const CharacterStory = ({ characterId, store }) => {
  const { characters } = store;

  const current = characters.find(character => character.id === characterId);
  if (!current) {
    return null;
  }

  //   console.log(current.name, current.nickname, current.about);

  return (
    <div className="container full_view">
      <StoryPart story={current.story} />
      <StoryTimeline story={current.story} />
    </div>
  );
};

export default inject(`store`)(observer(CharacterStory));
