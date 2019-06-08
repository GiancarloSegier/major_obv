import { decorate, observable, configure, action, runInAction } from "mobx";
import Story from "../models/Story";
import Character from "../models/Character";
import Api from "../api";

configure({ enforceActions: `observed` });
class Store {
  stories = [];
  characters = [];
  customStory = {};

  constructor() {
    this.characterApi = new Api(`characters`);
    this.storyApi = new Api(`stories`);
    this.getAll();
  }

  getAll = () => {
    this.characterApi.getAll().then(d => d.forEach(this._addCharacter));
    this.storyApi.getAll().then(d => d.forEach(this._addStory));
  };

  getInfo = (dataname, value) => {
    this.customStory[dataname] = value;
  };

  addStory = data => {
    const newStory = new Story();
    newStory.updateFromServer(data);
    this.stories.push(newStory);

    this.storyApi
      .create(newStory)
      .then(storyValues => newStory.updateFromServer(storyValues))
      .then(this.getAll());
  };

  _addStory = values => {
    const story = new Story();
    story.updateFromServer(values);
    runInAction(() => {
      this.stories.push(story);
    });
  };

  _addCharacter = values => {
    const character = new Character();
    character.updateFromServer(values);
    runInAction(() => {
      this.characters.push(character);
    });
  };
}

decorate(Store, {
  stories: observable,
  characters: observable,
  addStory: action,
  addCharacter: action,
  getInfo: action
});

const store = new Store();

export default store;
