import React, { useState, useEffect } from 'react';
import Card from './Card';
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

const Home = ({ user, questions, fetchQuestions }) => {
  const [unanswered, setUnanswered] = useState(true);

  useEffect(() => {
    fetchQuestions();
  }, []);

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
        {questions.map(
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
