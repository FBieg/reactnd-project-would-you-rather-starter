import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import NewQuestion from './containers/NewQuestion';
import LeaderBoard from './containers/LeaderBoard';
import Results from './containers/Results';
import Answer from './containers/Answer';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new-question">New Question</Link>
            </li>
            <li>
              <Link to="/leader-board">Leader Board</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path="/leader-board">
          <LeaderBoard />
        </Route>
        <Route path="/new-question">
          <NewQuestion />
        </Route>
        <Route path="/answer/:id">
          <Answer />
        </Route>
        <Route path="/question/:id">
          <Results />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
