import React from "react";
import styles from "./CreateTimeline.module.css";

const CreateTimeline = ({ step }) => {
  const steps = ["profile", "info", "about", "storyInfo", "story"];
  let i = 0;
  let currentStep;
  return (
    <ul className={styles.timeline}>
      {steps.map(item => {
        console.log(step);
        if (step === 6) {
          currentStep = 5;
        } else {
          currentStep = step;
        }
        i++;

        return (
          <div
            key={i}
            className={`${styles.line} ${
              i < currentStep ? styles.active_line : ""
            }`}
          >
            <li
              className={`${styles.bulletpoint} ${
                i === currentStep
                  ? styles.active
                  : i < currentStep
                  ? styles.done
                  : ""
              }`}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default CreateTimeline;
