import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { cx } from 'emotion';
import Home from './containers/Home';
import NewQuestion from './containers/NewQuestion';
import LeaderBoard from './containers/LeaderBoard';
import Results from './containers/Results';
import Answer from './containers/Answer';
import Login from './containers/Login';
import * as styles from './appStyles';
import './App.css';

function App() {
  return (
    <Router>
      <nav className={styles.navClass}>
        <ul className={styles.menuClass}>
          <li className={styles.listItem}>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/new-question">
              <span>New Question</span>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/leader-board">
              <span>Leader Board</span>
            </Link>
          </li>
        </ul>

        <ul className={cx(styles.menuClass, 'login')}>
          <li className={styles.listItem}>Hello, Tyler McGinnis</li>
          <li className={styles.listItem}>
            <img
              src="https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01-300x250.png"
              alt="user"
            />
          </li>
          <li className={styles.listItem}>
            <button type="button">Logout</button>
          </li>
        </ul>
      </nav>

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
