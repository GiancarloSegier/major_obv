import { decorate, observable, configure, action, runInAction } from "mobx";
import Story from "../models/Story";
import Character from "../models/Character";
import Hint from "../models/Hint";
import Api from "../api";

configure({ enforceActions: `observed` });
class Store {
  stories = [];
  characters = [];
  hints = [];
  customStory = {};

  constructor() {
    this.characterApi = new Api(`characters`);
    this.storyApi = new Api(`stories`);
    this.hintApi = new Api(`hints`);
    this.getAll();
  }

  getAll = () => {
    this.characterApi.getAll().then(d => d.forEach(this._addCharacter));
    this.storyApi.getAll().then(d => d.forEach(this._addStory));
    this.hintApi.getAll().then(d => d.forEach(this._addHint));
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
      .then(storyValues => newStory.updateFromServer(storyValues));
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
  _addHint = values => {
    const hint = new Hint();
    hint.updateFromServer(values);
    runInAction(() => {
      this.hints.push(hint);
    });
  };
}

decorate(Store, {
  stories: observable,
  characters: observable,
  hints: observable,
  addStory: action,
  addCharacter: action,
  getInfo: action
});

const store = new Store();

export default store;
