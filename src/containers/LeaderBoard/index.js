import React from 'react';
import Card from './Card';
import * as styles from './styles';

const LeaderBoard = () => (
  <div>
    <ul className={styles.leaderBoardClass}>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </ul>
  </div>
);

export default LeaderBoard;
