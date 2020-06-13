import React from 'react';
import * as styles from './styles';

const Vote = () => {
  const percent = 44;

  return (
    <div className={styles.resultQuestion}>
      <span className={styles.yourVote}>Your Vote</span>
      <h4 className={styles.question}>The questions?</h4>
      <div className={styles.percentBar}>
        <span
          className={styles.percent}
          style={{
            width: `${percent}%`,
          }}
        >{`${percent}%`}</span>
      </div>
      <div className={styles.average}>2 out of 3 votes</div>
    </div>
  );
};

export default Vote;
