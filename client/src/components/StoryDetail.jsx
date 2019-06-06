import React from "react";
import { inject, observer } from "mobx-react";

const StoryDetail = ({ storyId, store }) => {
  const { stories } = store;

  const currentStory = stories.find(story => story.id === storyId);

  if (!currentStory) {
    return null;
  }
  console.log(currentStory);

  return <h1> {currentStory.title} </h1>;
};

export default inject(`store`)(observer(StoryDetail));
