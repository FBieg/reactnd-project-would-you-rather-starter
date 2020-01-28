import React from 'react';
import Card from './Card';

const Home = () => (
  <div>
    <div>
      <div>
        <button>Unanswered Questions</button>
        <button>Answered Questions</button>
      </div>
      <ul>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    </div>
  </div>
);

export default Home;
