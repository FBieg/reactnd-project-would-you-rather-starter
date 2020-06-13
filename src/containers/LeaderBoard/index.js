import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { cx } from 'emotion';
import { mapStateToProps, mapDispatchToProps } from '../../Store';
import Card from './Card';
import * as styles from './styles';

const LeaderBoard = ({ userList, fetchUsers }) => {
  const [isLoading, setLoadingStatus] = useState(true);

  const orderedList = userList
    .map(({ id, name, answers, questions }) => {
      const amountOfAnswers = Object.keys(answers).length;
      const amountOfQuestions = questions.length;

      return {
        id,
        name,
        answers: amountOfAnswers,
        questions: amountOfQuestions,
        score: amountOfAnswers + amountOfQuestions,
      };
    })
    .sort((a, b) => (b.score > a.score ? 1 : -1));

  useEffect(() => {
    fetchUsers().then(() => {
      setLoadingStatus(false);
    });
  }, []);

  return (
    <div>
      <div className={cx(styles.spinnerContainer, { isLoading })}>
        <ClipLoader />
      </div>
      <ul className={styles.leaderBoardClass}>
        {orderedList.slice(0, 3).map((user) => (
          <li key={user.id}>
            <Card {...user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);
