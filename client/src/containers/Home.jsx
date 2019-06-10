import React, { useState, Component } from "react";
import { inject, observer, PropTypes, renderReporter } from "mobx-react";
import MainCharacter from "../components/MainCharacter";
import UserStory from "../components/your_story/UserStory";
import styles from "./Home.module.css";
import { ROUTES } from "../constants";
import { Link } from "react-router-dom";

const basicTags = [
  "#Romantisch",
  "#Waargebeurd",
  "#Ontroerend",
  "#Spannend",
  "#Gek",
  "#Mysterieus",
  "#Grappig",
  "#Avontuurlijk",
  "#Onverwacht",
  "#Actievol"
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.stories = this.props.store.stories;
    this.characters = this.props.store.characters;
    //
    this.state = { filters: [] };
  }
  setTags = e => {
    const { filters } = this.state;
    const input = [...filters];
    if (e.currentTarget.checked) {
      input.push(e.currentTarget.value);
    } else {
      if (input.includes(e.currentTarget.value)) {
        for (var i = 0; i < input.length; i++) {
          if (input[i] === e.currentTarget.value) {
            input.splice(i, 1);
          }
        }
      }
    }
    // let newState = [...input];
    this.setState({ filters: input });

    //console.log(this.state.filters);
  };
  getFilteredStories = () => {
    const { filters } = this.state;

    return this.stories.filter(story => {
      //do filter;
      return filters.find(f => story.tags.includes(f));
    });
  };
  render() {
    console.log(this.state);
    const filteredStories = this.getFilteredStories();
    return (
      <>
        <section id="intro" className="container margin margin-top">
          <h2 className={styles.title}>Ontdek ons verhaal</h2>
          <div className={styles.characters}>
            {this.characters.map(character => (
              <MainCharacter key={character.id} props={character} />
            ))}

            <Link to={ROUTES.create}>
              <article className={styles.CTA__create}>
                <h3 className={styles.CTA__title}>
                  We kennen hun verhaal, nu is het aan jou
                </h3>
                <p className={styles.CTA__tag}>Creeër je eigen verhaal</p>
              </article>
            </Link>
          </div>
        </section>
        <section id="discover" className="container margin">
          <h2 className={styles.section__title}>Ontdek nieuwe verhalen</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis nibh eu bibendum consequat. Donec vel quam molestie, tempor
            enim ut
          </p>
          <div className={`${styles.filter} margin`}>
            <h3 className="visually-hidden">Filteren</h3>
            <p className={styles.filter__title}>Toon mij:</p>

            {/* foreach database tags --> clickevent?? return value and use it to filter to new array (filteredarray)  */}

            <ul className={styles.filter__tags}>
              {basicTags.map((tag, index) => (
                <label className={styles.filter__tag} key={index}>
                  <input
                    type="checkbox"
                    id={`tag${index}`}
                    onClick={this.setTags}
                    value={tag}
                  />
                  {tag}
                </label>
              ))}
            </ul>
          </div>

          <div className={styles.stories}>
            {filteredStories.length
              ? filteredStories.map(story => {
                  return <UserStory id="tag" props={story} key={story.id} />;
                })
              : this.stories.map(story => {
                  return <UserStory id="tag" props={story} key={story.id} />;
                })}
          </div>
        </section>

        <section className={`container margin-top`}>
          <div className={styles.split_grid}>
            <img src="./assets/img/almaviva.jpg" alt="" />
            <div>
              <h2>Nu is het aan jou</h2>
              <p>Goesting gekregen om je eigen verhaal te creëren?</p>
              <Link to={ROUTES.createStory}>
                <button>Aan de slag</button>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}

Home.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(observer(Home));
