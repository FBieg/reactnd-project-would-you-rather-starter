import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { cx } from 'emotion';
import ClipLoader from 'react-spinners/ClipLoader';
import { mapStateToProps, mapDispatchToProps } from '../../Store';
import Vote from './Vote';
import * as styles from './styles';

const Questions = ({ questions, fetchQuestions }) => {
  const [isLoading, setLoadingStatus] = useState(Boolean(!questions.length));
  let { question_id } = useParams();

  const question = questions.find(({ id }) => question_id === id);
  const { author, optionOne = {}, optionTwo = {} } = question || {};

  const totalAnswers = (optionOne.votes || []).length + (optionTwo.votes || []).length;

  useEffect(() => {
    if (!questions.length) {
      fetchQuestions().then(() => setLoadingStatus(false));
    }
  }, [question_id, fetchQuestions, questions.length]);

  if (isLoading) {
    return (
      <div className={cx(styles.cardContainer, 'spinner')}>
        <ClipLoader />
      </div>
    );
  }

  if (!question) {
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

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
