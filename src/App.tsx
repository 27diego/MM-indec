import React from "react";
import "./App.scss";

import history from "./history";
import { Route, Router, Switch } from "react-router-dom";

import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import AdminDashboard from "./Components/Admin/AdminDashboard";

import { Provider } from "react-redux";
import { store } from "./Redux/Store/configureStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Dashboard" exact component={Dashboard} />
            <Route path="/Admin" exact component={AdminDashboard} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
