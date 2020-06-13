import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../Store';
import ClipLoader from 'react-spinners/ClipLoader';
import { cx } from 'emotion';
import * as styles from './styles';

const Answer = ({ user, saveQuestionAnswer, fetchQuestions, questions }) => {
  const [selectedAnswer, setAnswer] = useState('optionOne');
  const [isLoading, setLoadingStatus] = useState(Boolean(!questions.length));
  const history = useHistory();
  let { question_id } = useParams();

  const question = questions.find(({ id }) => question_id === id);

  const { author, optionOne = {}, optionTwo = {} } = question || {};
  const optionOneData = {
    value: 'optionOne',
    ...optionOne,
  };

  const optionTwoData = {
    value: 'optionTwo',
    ...optionTwo,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoadingStatus(true);
    saveQuestionAnswer(user.data.id, question_id, selectedAnswer).then(() => {
      fetchQuestions().then(() => {
        history.push(`/question/${question_id}`);
      });
    });
  };

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
    <div>
      <div className={styles.cardContainer}>
        <h2 className={styles.cardTitle}>{author} asks:</h2>
        <div className={styles.contentWrapper}>
          <img
            src="https://www.ctvalleybrewing.com/wp-content/uploads/2017/04/avatar-placeholder.png"
            alt="user"
          />
          <div className={styles.formContainer}>
            <h3>Would You Rather ...</h3>
            <form onSubmit={onSubmit}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={optionOneData.value}
                  checked={optionOneData.value === selectedAnswer}
                  onChange={() => setAnswer(optionOneData.value)}
                />
                {optionOneData.text}
              </label>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={optionTwoData.value}
                  checked={optionTwoData.value === selectedAnswer}
                  onChange={() => setAnswer(optionTwoData.value)}
                />
                {optionTwoData.text}
              </label>
              <button className={styles.buttonClass} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
