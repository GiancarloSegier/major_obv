// import React from "react";
// import styles from "./form.module.css";
// import { inject, observer } from "mobx-react";
// const StoryEditor = ({ step, store, submitForm }) => {
//   const textRef = React.createRef();
//   let height = 10;
//   const sendInfo = (dataname, value) => {
//     store.getInfo(dataname, value);
//   };

//   //Make sure that the output of the title has a capital first letter
//   const sendTitle = e => {
//     const title = e.currentTarget.value;
//     const titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1);
//     sendInfo("title", titleCapitalized);
//   };

//   const submitStory = e => {
//     // e.preventDefault();
//     submitForm(e);
//   };

//   const changeHeight = e => {
//     sendInfo("story", e.currentTarget.value);
//     console.log(textRef.current.height);
//   };

//   return (
//     <>
//       <form onSubmit={submitStory} className={styles.editorGrid}>
//         <div className={styles.textEditor}>
//           <h2 className={styles.part__title}>
//             <span className={styles.part__step}>05</span> Jouw verhaal
//           </h2>
//           <input
//             className={styles.titleField}
//             name="title"
//             id="title"
//             required
//             placeholder="Schrijf hier je titel"
//             onChange={sendTitle}
//           />
//           <textarea
//             className={styles.textField}
//             name="story"
//             id="story"
//             required
//             ref={textRef}
//             height={`${height}rem`}
//             placeholder="Hier begint jouw verhaal. Een duwtje in de rug nodig? Je vindt hiernaast inspiratie om je op weg te helpen. "
//             // onChange={e => sendInfo("story", e.currentTarget.value)}
//             onChange={changeHeight}
//           />
//         </div>

//         <div className={styles.hints}>
//           <p>Food for thought</p>
//           <button type="submit" className={styles.button}>
//             Versturen
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default inject(`store`)(observer(StoryEditor));

import React, { Component } from "react";
import styles from "./form.module.css";
import { inject, observer } from "mobx-react";
class StoryEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { textareaLength: 60 };
    this.textRef = React.createRef();
  }

  sendInfo = (dataname, value) => {
    this.props.store.getInfo(dataname, value);
  };

  //   //Make sure that the output of the title has a capital first letter
  sendTitle = e => {
    this.title = e.currentTarget.value;
    this.titleCapitalized =
      this.title.charAt(0).toUpperCase() + this.title.slice(1);
    this.sendInfo("title", this.titleCapitalized);
  };

  submitStory = e => {
    e.preventDefault();
    this.props.submitForm(e);
  };

  changeHeight = e => {
    this.currentHeight = this.textRef.current.scrollHeight;
    if (!e.currentTarget.value) {
      this.setState({ textareaLength: 60 });
    } else {
      this.setState({ textareaLength: this.currentHeight });
    }
    // this.textRef.current.style.height = 200;
    this.textRef.current.style.height = this.state.textareaLength + "px";
    this.sendInfo("story", e.currentTarget.value);
    console.log(e.currentTarget.value);
  };
  render() {
    return (
      <>
        <form onSubmit={this.submitStory} className={styles.editorGrid}>
          <div className={styles.textEditor}>
            <h2 className={styles.part__title}>
              <span className={styles.part__step}>05</span> Jouw verhaal
            </h2>
            <input
              className={styles.titleField}
              name="title"
              id="title"
              required
              placeholder="Schrijf hier je titel"
              onChange={this.sendTitle}
            />
            <textarea
              className={styles.textField}
              name="story"
              id="story"
              required
              ref={this.textRef}
              placeholder="Hier begint jouw verhaal. Een duwtje in de rug nodig? Je vindt hiernaast inspiratie om je op weg te helpen. "
              // onChange={e => sendInfo("story", e.currentTarget.value)}
              onChange={this.changeHeight}
            />
          </div>

          <div className={styles.hints}>
            <p>Food for thought</p>
            <button type="submit" className={styles.button}>
              Versturen
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default inject(`store`)(observer(StoryEditor));
