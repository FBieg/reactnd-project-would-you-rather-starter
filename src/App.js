import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './containers/Home';
import NewQuestion from './containers/NewQuestion';
import LeaderBoard from './containers/LeaderBoard';
import Results from './containers/Results';
import Answer from './containers/Answer';
import Login from './containers/Login';
import './App.css';

function App() {
  return (
    <Router>
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
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
