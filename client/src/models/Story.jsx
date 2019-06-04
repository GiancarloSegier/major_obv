import uuid from "uuid";
import { decorate, observable, computed, action } from "mobx";

class Story {
  constructor(name, id = uuid.v4()) {
    this.id = id;
    this.name = name;

    console.log(this.time);
  }

  get values() {
    return {
      name: this.name,
      description: this.description,
      deadline: this.deadline,
      time: this.time
    };
  }

  setId = id => (this.id = id);
  setName = name => (this.name = name);

  updateFromServer = values => {
    this.setId(values._id);
    this.setName(values.name);

    console.log(values);
  };
}

decorate(Story, {
  id: observable,
  setId: action,
  setName: action,
  values: computed
});

export default Story;
