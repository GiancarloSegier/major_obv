import { decorate, observable, configure, action, runInAction } from "mobx";
import Story from "../models/Story";
import Api from "../api";

configure({ enforceActions: `observed` });
class Store {
  stories = [];

  constructor() {
    this.api = new Api(`stories`);
    this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addStory));
  };

  addStory = data => {
    const newStory = new Story();
    newStory.updateFromServer(data);
    this.stories.push(newStory);

    this.api
      .create(newStory)
      .then(storyValues => newStory.updateFromServer(storyValues));
  };

  _addStory = values => {
    console.log(values);
    const story = new Story();
    story.updateFromServer(values);
    runInAction(() => {
      this.stories.push(story);
    });
  };
}

decorate(Store, {
  stories: observable,
  addStory: action
});

const store = new Store();

export default store;
