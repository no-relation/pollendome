import React, { Component } from 'react';
import { Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import { connect } from "react-redux";
import history from "./state/history";
import { NavBar } from "./views/components/navbar";
import { Home } from "./views/containers/home";
import { User } from "./views/components/user";
import { UserList } from "./views/components/userlist"
import { Login } from "./views/components/login";
import { Signup } from "./views/containers/signup";
import { actions } from './state/actions';
import { DaysContainer } from './views/containers/days_container';

class _App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar currentUser = {this.props.currentUser} logout = {this.props.logout} />
          <Switch>
            <Route path="/days" component={DaysContainer} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/user/:id" render = {(props) => <User {...props} /> } />
            <Route path="/user/" component={UserList} />
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

export const App = connect(mapStateToProps, actions)(_App);
