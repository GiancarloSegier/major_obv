import React from "react";
import MainCharacter from "../components/MainCharacter";
import UserStory from "../components/UserStory";

const Home = () => {
  return (
    <>
      <section id="intro">
        <h2>Ontdek ons verhaal</h2>

        {/* foreach database characters */}
        <MainCharacter name="Clara" />
        <MainCharacter name="Almaviva" />
        <MainCharacter name="Pamina" />

        <article>
          <p>Vertel jouw verhaal</p>
        </article>
      </section>
      <section id="discover">
        <h2>Ontdek nieuwe verhalen</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          nibh eu bibendum consequat. Donec vel quam molestie, tempor enim ut
        </p>

        <div>
          <p>Toon mij:</p>

          {/* foreach database tags --> clickevent?? return value and use it to filter to new array (filteredarray)  */}

          <div>Avontuurlijk</div>
          <div>Triestig</div>
        </div>

        {/* foreach database stories */}

        <UserStory name="laurens" />
      </section>
    </>
  );
};

export default Home;
