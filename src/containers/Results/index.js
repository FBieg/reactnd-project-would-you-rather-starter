import React from 'react';
import * as styles from './styles';

const Questions = () => {
  const percent = 44;

  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardTitle}>Sarah Ekkdos ask</h2>
      <div className={styles.cardContent}>
        <picture className={styles.avatar}>
          <img
            src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-518740762.jpg"
            alt="User"
          />
        </picture>
        <div className={styles.cardInfo}>
          <h3>Results</h3>
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
        </div>
      </div>
    </div>
  );
};

export default Questions;
