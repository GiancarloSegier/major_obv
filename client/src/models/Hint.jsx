import uuid from "uuid";
import { decorate, observable, computed, action } from "mobx";

class Hint {
  constructor(hint, id = uuid.v4()) {
    this.id = id;
    this.hint = hint;
  }

  get values() {
    return {
      hint: this.hint
    };
  }

  setId = id => (this.id = id);
  setHint = hint => (this.hint = hint);

  updateFromServer = values => {
    this.setId(values._id);
    this.setHint(values.hint);
  };
}

decorate(Hint, {
  id: observable,
  // setValue: action,
  setId: action,
  setHint: action,
  values: computed
});

export default Hint;
