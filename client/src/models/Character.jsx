import uuid from "uuid";
import { decorate, observable, computed, action } from "mobx";

class Character {
  constructor(
    name,
    nickname,
    about,
    story,
    facebook,
    twitter,
    instagram,
    id = uuid.v4()
  ) {
    this.id = id;
    this.name = name;
    this.nickname = nickname;
    this.about = about;
    this.story = story;
    this.facebook = facebook;
    this.twitter = twitter;
    this.instagram = instagram;
  }

  get values() {
    return {
      name: this.name,
      nickname: this.nickname,
      about: this.about,
      story: this.story,
      facebook: this.facebook,
      twitter: this.twitter,
      instagram: this.instagram
    };
  }

  setId = id => (this.id = id);
  setName = name => (this.name = name);
  setNickname = nickname => (this.nickname = nickname);
  setAbout = about => (this.about = about);
  setStory = story => (this.story = story);
  setFacebook = facebook => (this.facebook = facebook);
  setTwitter = twitter => (this.twitter = twitter);
  setInstagram = instagram => (this.instagram = instagram);

  updateFromServer = values => {
    this.setId(values._id);
    this.setName(values.name);
    this.setNickname(values.nickname);
    this.setAbout(values.about);
    this.setStory(values.story);
    this.setFacebook(values.facebook);
    this.setTwitter(values.twitter);
    this.setInstagram(values.instagram);
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
  setFacebook: action,
  setTwitter: action,
  setInstagram: action,
  values: computed
});

export default Character;
