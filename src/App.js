import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps } from './Store';
import Header from './components/Header';
import Home from './containers/Home';
import NewQuestion from './containers/NewQuestion';
import LeaderBoard from './containers/LeaderBoard';
import Results from './containers/Results';
import Answer from './containers/Answer';
import Login from './containers/Login';
import './App.css';

function App({ user }) {
  return (
    <Router>
      {user.isLogged ? (
        <Fragment>
          <Header />

          <Switch>
            <Route path="/leaderboard">
              <LeaderBoard />
            </Route>
            <Route path="/add">
              <NewQuestion />
            </Route>
            <Route path="/answer/:id">
              <Answer />
            </Route>
            <Route path="/question/:id">
              <Results />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Fragment>
      ) : (
        <Switch>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Redirect to="/login" />
        </Route>
        </Switch>
      )}
    </Router>
  );
}

export default connect(mapStateToProps)(App);
