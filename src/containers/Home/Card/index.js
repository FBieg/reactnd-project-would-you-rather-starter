import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles';

const Card = ({ data: { id, author, optionOne, optionTwo }, isAnswered, createdByUser }) => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardTitle}>
        {author} {createdByUser && <span>(You)</span>}
      </h2>
      <div className={styles.cardContent}>
        <picture className={styles.avatar}>
          <img
            src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-518740762.jpg"
            alt="User"
          />
        </picture>
        <div className={styles.cardInfo}>
          <h3>Would you rather</h3>
          <div>
            <span>{`${optionOne.text.substring(0, 25)} ...`}</span>
          </div>
          <div>
            <span>{`${optionTwo.text.substring(0, 25)} ...`}</span>
          </div>
          <Link to={`${isAnswered ? 'question' : 'answer'}/${id}`}>
            <button className={styles.button} type="button">
              View Pull
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
