import React, { Component } from "react";
import styles from "./Hints.module.css";
import { inject, observer } from "mobx-react";

class Hints extends Component {
  constructor(props) {
    super(props);
    this.hints = this.props.store.hints;
    this.state = {
      start: 0,
      end: 3
    };
  }

  loadHints = e => {
    let oldEnd = this.state.end;
    let newStart = oldEnd;
    let newEnd = newStart + 3;

    if (oldEnd >= this.hints.length) {
      this.setState({ start: 0, end: 3 });
    } else {
      this.setState({ start: newStart, end: newEnd });
    }
  };
  render() {
    return (
      <>
        <div>
          <p className={styles.hints__title}>Food for thought</p>

          <ul>
            {this.hints.slice(this.state.start, this.state.end).map(hint => (
              <li key={hint.id} className={styles.hint}>
                {hint.hint}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={this.loadHints}
            className={styles.loadButton}
          >
            Meer inspiratie <span className={styles.addsign}>+</span>
          </button>
        </div>

        <button type="submit" className={styles.button}>
          Bewaar je verhaal
        </button>
      </>
    );
  }
}

export default inject(`store`)(observer(Hints));
