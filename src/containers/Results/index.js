import React from 'react';
import Vote from './Vote'
import * as styles from './styles';

const Questions = () => {
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
          <Vote />
          <Vote />
        </div>
      </div>
    </div>
  );
};

export default Questions;
