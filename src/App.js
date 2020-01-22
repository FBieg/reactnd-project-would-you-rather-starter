import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
          Rank by score (answered + created questions)
        </Route>
        <Route path="/new-question">
          Add a new question :D
        </Route>
        <Route path="/question/:id">
          Add answer to a question
          if the question is answered, show percentage table
        </Route>
        <Route path="/">
          If the user is logged in, show the home (answered and unanswered questions)
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
