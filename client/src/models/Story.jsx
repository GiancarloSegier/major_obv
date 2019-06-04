import uuid from "uuid";
import { decorate, observable, computed, action } from "mobx";

class Story {
  constructor(title, id = uuid.v4()) {
    this.id = id;
    this.title = title;
  }

  get values() {
    return {
      title: this.title
    };
  }

  setId = id => (this.id = id);
  setTitle = title => (this.title = title);

  updateFromServer = values => {
    this.setId(values._id);
    this.setTitle(values.title);
  };
}

decorate(Story, {
  id: observable,
  setId: action,
  setTitle: action,
  values: computed
});

export default Story;
