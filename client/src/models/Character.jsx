import uuid from "uuid";
import { decorate, observable, computed, action } from "mobx";

class Character {
  constructor(name, id = uuid.v4()) {
    this.id = id;
    this.name = name;
  }

  get values() {
    return {
      name: this.name
    };
  }

  setId = id => (this.id = id);
  setName = name => (this.name = name);

  // setValue = value => {
  //   this.value = value;
  //   console.log(this.value);
  // };

  updateFromServer = values => {
    this.setId(values._id);
    this.setName(values.name);

    console.log(values);
  };
}

decorate(Character, {
  id: observable,
  // setValue: action,
  setId: action,
  setName: action,
  values: computed
});

export default Character;
