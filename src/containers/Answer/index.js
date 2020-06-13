import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../Store';
import { _getQuestionById, _saveQuestionAnswer } from '../../_DATA';
import * as styles from './styles';

const Answer = ({ user }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setAnswer] = useState('optionOne');
  const isLoading = question === null;
  const history = useHistory();
  let { id } = useParams();

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

    _saveQuestionAnswer({ authedUser: user.data.id, qid: id, answer: selectedAnswer }).then(() => {
      history.push(`/question/${id}`);
    });
  };

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
