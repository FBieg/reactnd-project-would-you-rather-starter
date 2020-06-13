import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { _getQuestionById } from '../../_DATA';
import Vote from './Vote';
import * as styles from './styles';

const Questions = () => {
  const [question, setQuestion] = useState(null);
  const isLoading = question === null;
  let { id } = useParams();

  const { author, optionOne = {}, optionTwo = {} } = question || {};

  const totalAnswers = (optionOne.votes || []).length + (optionTwo.votes || []).length;

  useEffect(() => {
    _getQuestionById(id)
      .then((data) => {
        setQuestion(data);
      })
      .catch((data) => {
        setQuestion(data);
      });
  }, [id]);

  if (isLoading) {
    return <div className={styles.cardContainer}>Loading...</div>;
  }

  if (question.err) {
    return <div className={styles.cardContainer}>Sorry, this poll does not exist.</div>;
  }

  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardTitle}>{author} ask</h2>
      <div className={styles.cardContent}>
        <picture className={styles.avatar}>
          <img
            src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-518740762.jpg"
            alt="User"
          />
        </picture>
        <div className={styles.cardInfo}>
          <h3>Results</h3>
          <Vote option={optionOne} totalAnswers={totalAnswers} />
          <Vote option={optionTwo} totalAnswers={totalAnswers} />
        </div>
      </div>
    </div>
  );
};

export default Questions;
