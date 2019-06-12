import React, { Component } from "react";
import { inject, observer, PropTypes } from "mobx-react";
import MainCharacter from "../components/MainCharacter";
import UserStory from "../components/your_story/UserStory";
import styles from "./Home.module.css";
import { ROUTES } from "../constants";
import { Link } from "react-router-dom";

const basicTags = [
  "#Romantisch",
  "#Waargebeurd",
  "#Actie",
  "#Gek",
  "#Spannend",
  "#Mysterieus",
  "#Ontroerend",
  "#Onverwacht",
  "#Grappig"
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.stories = this.props.store.stories;
    this.characters = this.props.store.characters;
    //
    this.state = { filters: [], searchTerm: "", start: 0, end: 6 };
    this.searchRef = React.createRef();
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
    this.setState({ filters: input });
  };

  setTerms = e => {
    this.setState({ searchTerm: this.searchRef.current.value });

    console.log(this.searchRef.current.value);
    console.log(this.state.searchTerm);
  };

  getFilteredStories = () => {
    const { filters, searchTerm } = this.state;

    let filterResults = [];

    if (filters.length > 0) {
      filterResults = this.stories
        .filter(story => {
          //do filter;
          return filters.find(tag => story.tags.includes(tag));
        })
        .filter(story => {
          return story.name.toLowerCase().includes(searchTerm);
        });
    } else if (searchTerm !== "") {
      filterResults = this.stories.filter(story => {
        return story.name
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
      });
    } else {
      filterResults = this.stories;
    }

    return filterResults;
  };

  loadStories = e => {
    let oldEnd = this.state.end;
    let newEnd = oldEnd + 6;
    this.setState({ end: newEnd });
  };

  render() {
    const filteredStories = this.getFilteredStories();
    return (
      <>
        <section
          id="intro"
          className={`container margin-bottom margin-top ${styles.four_grid}`}
        >
          <h2 className={styles.title}>Ontdek ons verhaal</h2>
          <div className={styles.characters}>
            {this.characters.map(character => (
              <MainCharacter key={character.id} props={character} />
            ))}

            <Link to={ROUTES.create} className={styles.noLink}>
              <article className={styles.CTA__create}>
                <p className={styles.CTA__tag}>
                  Hun verhaal is al verteld, en dat van jou?{" "}
                  <span className={styles.CTA__arrow} />
                </p>
              </article>
            </Link>
          </div>
        </section>
        <section id="discover" className="container margin-bottom">
          <div className={`${styles.grid__stories} ${styles.border__bottom} `}>
            <div>
              <h2 className={styles.section__title}>
                Ongehoorde <br />
                verhalen
              </h2>
              <p className={styles.description}>
                Neus door de ingezonden personages en ontdek hun vertelsels in
                alle vormen en maten.
              </p>
            </div>
            <div className={`${styles.filter}`}>
              <h3 className="visually-hidden">Filteren</h3>
              <p className={styles.filter__title}>Filter</p>
              <label htmlFor="filter" className={styles.filter__text}>
                Filter
              </label>
              <input
                className={`${styles.filter__button}`}
                type="checkbox"
                id="filter"
              />
              <div className={styles.filter__block}>
                <ul className={styles.filter__tags}>
                  {basicTags.map((tag, index) => (
                    <label className={styles.tag} key={index}>
                      <input
                        type="checkbox"
                        id={`tag${index}`}
                        onClick={this.setTags}
                        value={tag}
                        className={styles.tag__input}
                      />
                      <div className={styles.tag__checkBox}>{tag}</div>
                    </label>
                  ))}
                </ul>
                <div className={styles.searchField__icon}>
                  <input
                    type="text"
                    id="searchfield"
                    onChange={this.setTerms}
                    className={styles.searchField}
                    placeholder="Zoek op naam personage"
                    ref={this.searchRef}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.stories}>
            {filteredStories.length
              ? filteredStories
                  .slice(this.state.start, this.state.end)
                  .map(story => {
                    return <UserStory id="tag" props={story} key={story.id} />;
                  })
              : this.stories
                  .slice(this.state.start, this.state.end)
                  .map(story => {
                    return <UserStory id="tag" props={story} key={story.id} />;
                  })}
            <button
              type="button"
              onClick={this.loadStories}
              className={
                filteredStories.length <= this.state.end
                  ? `${styles.loadButton} ${styles.hideButton}`
                  : `${styles.loadButton}`
              }
            >
              Toon meer verhalen <span className={styles.addsign}>+</span>
            </button>
          </div>
        </section>

        <section className={`container margin-top margin-bottom`}>
          <div className={styles.grid__half}>
            <img src="./assets/img/almaviva.jpg" alt="" />
            <div>
              <h2 className={styles.subTitle}>Nu is het aan jou</h2>
              <p className={styles.largeText}>
                Goesting gekregen om je eigen verhaal te creëren?
              </p>
              <Link to={ROUTES.createStory}>
                <button type="button" className={styles.button}>
                  Aan de slag
                </button>
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
