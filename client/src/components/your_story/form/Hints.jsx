import React, { Component } from "react";
import styles from "./Hints.module.css";
import { inject, observer } from "mobx-react";

class Hints extends Component {
  constructor(props) {
    super(props);
    this.hints = this.props.store.hints;
  }
  render() {
    return (
      <>
        <div>
          <p className={styles.hints__title}>Food for thought</p>

          <ul>
            {this.hints.map(hint => (
              <li key={hint.id} className={styles.hint}>
                {hint.hint}
              </li>
            ))}
          </ul>
        </div>

        <button type="submit" className={styles.button}>
          Bewaar je verhaal
        </button>
      </>
    );
  }
}

export default inject(`store`)(observer(Hints));
