import React, { Component } from 'react';
import { Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import history from "./state/history";
import { User } from "./views/user";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={User} />
        </Switch>
      </Router>
    );
  }
}

export default App;
