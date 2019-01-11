import React, { Component } from 'react';
import { Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import history from "./state/history";
import { NavBar } from "./views/components/navbar";
import { User } from "./views/components/user";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={User} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
