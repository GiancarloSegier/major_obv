import { decorate, observable, configure, action, runInAction } from "mobx";
import Story from "../models/Story";
import Character from "../models/Character";
import Api from "../api";

configure({ enforceActions: `observed` });
class Store {
  stories = [];
  characters = [];

  constructor() {
    this.characterApi = new Api(`characters`);
    this.storyApi = new Api(`stories`);

    this.getAll();
  }

  getAll = () => {
    this.characterApi.getAll().then(d => d.forEach(this._addCharacter));
    this.storyApi.getAll().then(d => d.forEach(this._addStory));
  };

  addStory = data => {
    const newStory = new Story();
    newStory.updateFromServer(data);
    this.stories.push(newStory);

    this.storyApi
      .create(newStory)
      .then(storyValues => newStory.updateFromServer(storyValues));
  };

  _addStory = values => {
    // console.log(values);
    const story = new Story();
    story.updateFromServer(values);
    runInAction(() => {
      this.stories.push(story);
    });
  };

  _addCharacter = values => {
    // console.log(values);
    const character = new Character();
    character.updateFromServer(values);
    runInAction(() => {
      this.characters.push(character);
    });
  };
}

decorate(Store, {
  stories: observable,
  addStory: action,
  addCharacter: action
});

const store = new Store();

export default store;
