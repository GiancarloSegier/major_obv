import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../constants";
import Home from "./Home.jsx";
import Create from "./Create";
import About from "./About";
import Navbar from "../components/Navbar";

function App() {
  return (
    <main>
      <h1>Opera Ballet Vlaanderen</h1>
      <Navbar />
      <Switch>
        <Route path={ROUTES.home} exact strict component={Home} />
        <Route path={ROUTES.create} exact strict component={Create} />
        <Route path={ROUTES.about} exact strict component={About} />
      </Switch>
    </main>
  );
}

export default App;
