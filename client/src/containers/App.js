import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../constants";
import Home from "./Home.jsx";
import Create from "./Create";
import About from "./About";
import Navbar from "../components/Navbar";
import StoryDetail from "../components/StoryDetail";
import CharacterDetail from "./CharacterDetail";

function App() {
  return (
    <main>
      <h1 className="visually-hidden">Opera Ballet Vlaanderen</h1>
      <Navbar />
      <Switch>
        <Route path={ROUTES.home} exact strict component={Home} />
        <Route path={ROUTES.create} exact strict component={Create} />
        <Route path={ROUTES.about} exact strict component={About} />
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
      </Switch>
    </main>
  );
}

export default App;
