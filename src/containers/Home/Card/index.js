import React from 'react';
import * as styles from './styles';

const Card = () => (
  <div className={styles.cardContainer}>
    <h2 className={styles.cardTitle}>Sarah Edo ask</h2>
    <div className={styles.cardContent}>
      <picture className={styles.avatar}>
        <img
          src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-518740762.jpg"
          alt="User"
        />
      </picture>
      <div className={styles.cardInfo}>
        <h3>Would you rather</h3>
        <p>...a..</p>
        <button className={styles.button} type="button">View Pull</button>
      </div>
    </div>
  </div>
);

export default Card;
