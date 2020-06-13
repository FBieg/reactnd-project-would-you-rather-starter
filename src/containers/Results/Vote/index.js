import React from 'react';
import { connect } from 'react-redux';
import { cx } from 'emotion';
import { mapStateToProps } from '../../../Store';
import * as styles from './styles';

const Vote = ({ option, totalAnswers, user }) => {
  const userID = user.data.id;
  const votes = option.votes.length;
  const percent = (100 * votes) / totalAnswers;

  return (
    <div className={cx(styles.resultQuestion, { isChosen: option.votes.includes(userID) })}>
      <span className={styles.yourVote}>Your Vote</span>
      <h4 className={styles.question}>{option.text}</h4>
      <div className={styles.percentBar}>
        <span
          className={styles.percent}
          style={{
            width: `${percent}%`,
          }}
        >{`${percent}%`}</span>
      </div>
      <div className={styles.average}>
        {votes} out of {totalAnswers} votes
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Vote);
