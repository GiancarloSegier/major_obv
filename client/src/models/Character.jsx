import uuid from "uuid";
import { decorate, observable, computed, action } from "mobx";

class Character {
  constructor(name, nickname, about, id = uuid.v4()) {
    this.id = id;
    this.name = name;
    this.nickname = nickname;
    this.about = about;
  }

  get values() {
    return {
      name: this.name,
      nickname: this.nickname,
      about: this.about,
      story: this.story
    };
  }

  setId = id => (this.id = id);
  setName = name => (this.name = name);
  setNickname = nickname => (this.nickname = nickname);
  setAbout = about => (this.about = about);
  setStory = story => (this.story = story);

  updateFromServer = values => {
    this.setId(values._id);
    this.setName(values.name);
    this.setNickname(values.nickname);
    this.setAbout(values.about);
    this.setStory(values.story);
  };
}

decorate(Character, {
  id: observable,
  // setValue: action,
  setId: action,
  setName: action,
  setNickname: action,
  setAbout: action,
  setStory: action,
  values: computed
});

export default Character;
