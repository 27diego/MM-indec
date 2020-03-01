import React from "react";
import "./App.scss";

import history from "./history";
import { Route, Router, Switch } from "react-router-dom";

import { Login } from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
