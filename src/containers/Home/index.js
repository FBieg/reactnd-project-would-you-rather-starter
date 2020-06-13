import React, { useState, useEffect } from 'react';
import Card from './Card';
import { _getQuestions } from '../../_DATA';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../Store';
import * as styles from './styles';
import { cx } from 'emotion';

/**
  Check if the question has been answered
 * @param {Object} Question 
 * @param {Object} User 
 * @return {Boolean}
 */
const isAnswered = ({ optionOne, optionTwo }, { id }) =>
  [...optionOne.votes, ...optionTwo.votes].includes(id);

const Home = ({ user }) => {
  const [unanswered, setUnanswered] = useState(true);
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    _getQuestions().then((users) => setQuestionList(Object.values(users)));
  }, []);

  console.log(questionList);

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.tabsContainer}>
        <button className={cx({ active: unanswered })} onClick={() => setUnanswered(true)}>
          Unanswered Questions
        </button>
        <button className={cx({ active: !unanswered })} onClick={() => setUnanswered(false)}>
          Answered Questions
        </button>
      </div>
      <ul className={styles.cardsContainer}>
        {questionList.map(
          (data) =>
            unanswered === !isAnswered(data, user.data) && (
              <li key={data.id}>
                <Card data={data} />
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
