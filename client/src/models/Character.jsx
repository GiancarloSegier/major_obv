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
    spotify,
    title,
    author,
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
    this.spotify = spotify;
    this.title = title;
    this.author = author;
  }

  get values() {
    return {
      name: this.name,
      nickname: this.nickname,
      about: this.about,
      story: this.story,
      facebook: this.facebook,
      twitter: this.twitter,
      instagram: this.instagram,
      spotify: this.spotify,
      title: this.title,
      author: this.author
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
  setSpotify = spotify => (this.spotify = spotify);
  setTitle = title => (this.title = title);
  setAuthor = author => (this.author = author);

  updateFromServer = values => {
    this.setId(values._id);
    this.setName(values.name);
    this.setNickname(values.nickname);
    this.setAbout(values.about);
    this.setStory(values.story);
    this.setFacebook(values.facebook);
    this.setTwitter(values.twitter);
    this.setInstagram(values.instagram);
    this.setSpotify(values.spotify);
    this.setTitle(values.title);
    this.setAuthor(values.author);
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
  setSpotify: action,
  setTitle: action,
  setAuthor: action,
  values: computed
});

export default Character;
