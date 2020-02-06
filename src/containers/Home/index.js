import React from 'react';
import Card from './Card';
import * as styles from './styles';

const Home = () => (
  <div className={styles.contentWrapper}>
    <div className={styles.tabsContainer}>
      <button className="active">Unanswered Questions</button>
      <button>Answered Questions</button>
    </div>
    <ul className={styles.cardsContainer}>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </ul>
  </div>
);

export default Home;
