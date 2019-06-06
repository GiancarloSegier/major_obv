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
      about: this.about
    };
  }

  setId = id => (this.id = id);
  setName = name => (this.name = name);
  setNickname = nickname => (this.nickname = nickname);
  setAbout = about => (this.about = about);

  updateFromServer = values => {
    this.setId(values._id);
    this.setName(values.name);
<<<<<<< HEAD
=======
    this.setNickname(values.nickname);
    this.setAbout(values.about);
    console.log(values);
>>>>>>> experience_story
  };
}

decorate(Character, {
  id: observable,
  // setValue: action,
  setId: action,
  setName: action,
  setNickname: action,
  setAbout: action,
  values: computed
});

export default Character;