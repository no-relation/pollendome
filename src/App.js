import React, { Component } from 'react';
import { Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import { connect } from "react-redux";
import history from "./state/history";
import { NavBar } from "./views/components/navbar";
import { Home } from "./views/containers/home";
import { User } from "./views/components/user";

class _App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar currentUser = {this.props.currentUser}/>
          <Switch>
            <Route path="/user/:id" render = {(props) => <User {...props} /> } />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

export const App = connect(mapStateToProps)(_App);
