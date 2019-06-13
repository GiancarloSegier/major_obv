import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../constants";
import Home from "./Home.jsx";
import Create from "./your_story/Create";
import About from "./About";
import Navbar from "../components/Navbar";
import StoryDetail from "./your_story/StoryDetail";
import CharacterDetail from "./CharacterDetail";
import CreateStory from "./your_story/CreateStory";
import CharacterStory from "./CharacterStory";
import Almaviva from "./social/Almaviva";
import Pamina from "./social/Pamina";
import Clara from "./social/Clara";

function App() {
  return (
    <main>
      <h1 className="visually-hidden">Opera Ballet Vlaanderen</h1>

      <Navbar />

      <Switch>
        <Route path={ROUTES.home} exact strict component={Home} />
        <Route path={ROUTES.create} component={Create} />
        <Route path={ROUTES.about} component={About} />
        <Route
          path={ROUTES.story}
          render={({ match }) => <StoryDetail storyId={match.params.id} />}
        />
        <Route
          path={ROUTES.character}
          render={({ match }) => (
            <CharacterDetail characterId={match.params.id} />
          )}
        />
        <Route path={ROUTES.createStory} component={CreateStory} />
        <Route
          path={ROUTES.characterStory}
          render={({ match }) => (
            <CharacterStory characterId={match.params.id} />
          )}
        />
        <Route path={ROUTES.almaviva} component={Almaviva} />
        <Route path={ROUTES.pamina} component={Pamina} />
        <Route path={ROUTES.clara} component={Clara} />
      </Switch>
    </main>
  );
}

export default App;
