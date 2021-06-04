import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SingleTeam from "./components/SingleTeam/SingleTeam";
import TeamDetail from "./components/TeamDetail/TeamDetail";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <SingleTeam />
          </Route>
          <Route path="/info/:id">
            <TeamDetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
