import uuid from "uuid";
import { decorate, observable, computed, action } from "mobx";

class Story {
  constructor(
    title,
    name,
    tags,
    location,
    age,
    personality,
    gender,
    head,
    eyes,
    nose,
    mouth,
    story,
    id = uuid.v4()
  ) {
    this.id = id;
    this.title = title;
    this.name = name;
    this.tags = tags;
    this.location = location;
    this.age = age;
    this.personality = personality;
    this.gender = gender;
    this.head = head;
    this.eyes = eyes;
    this.nose = nose;
    this.mouth = mouth;
    this.story = story;
  }

  get values() {
    return {
      title: this.title,
      name: this.name,
      tags: this.tags,
      location: this.location,
      age: this.age,
      personality: this.personality,
      gender: this.gender,
      head: this.head,
      eyes: this.eyes,
      nose: this.nose,
      mouth: this.mouth,
      story: this.story
    };
  }

  setId = id => (this.id = id);
  setTitle = title => (this.title = title);
  setName = name => (this.name = name);
  setTags = tags => (this.tags = tags);
  setLocation = location => (this.location = location);
  setAge = age => (this.age = age);
  setPersonality = personality => (this.personality = personality);
  setGender = gender => (this.gender = gender);
  setHead = head => (this.head = head);
  setEyes = eyes => (this.eyes = eyes);
  setNose = nose => (this.nose = nose);
  setMouth = mouth => (this.mouth = mouth);
  setStory = story => (this.story = story);

  // setValue = value => {
  //   this.value = value;
  //   console.log(this.value);
  // };

  updateFromServer = values => {
    this.setId(values._id);
    this.setTitle(values.title);
    this.setName(values.name);
    this.setTags(values.tags);
    this.setLocation(values.location);
    this.setAge(values.age);
    this.setPersonality(values.personality);
    this.setGender(values.gender);
    this.setHead(values.head);
    this.setEyes(values.eyes);
    this.setNose(values.nose);
    this.setMouth(values.mouth);
    this.setStory(values.story);
    console.log(values);
  };
}

decorate(Story, {
  id: observable,
  // setValue: action,
  setId: action,
  setTitle: action,
  setName: action,
  setTags: action,
  setLocation: action,
  setAge: action,
  setPersonality: action,
  setGender: action,
  setHead: action,
  setEyes: action,
  setNose: action,
  setMouth: action,
  setStory: action,
  values: computed
});

export default Story;
