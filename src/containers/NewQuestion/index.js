import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { cx } from 'emotion';
import { mapStateToProps, mapDispatchToProps } from '../../Store';
import * as styles from './styles';

const NewQuestion = ({ user, saveQuestion, fetchQuestions }) => {
  const history = useHistory();
  const [optionOneText, setOptionOne] = useState('');
  const [optionTwoText, setOptionTwo] = useState('');
  const [status, setStatus] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (optionOneText.length >= 1 && optionTwoText.length >= 1 && optionOneText !== optionTwoText) {
      setStatus({ isLoading: true });

      saveQuestion(user.data.id, optionOneText, optionTwoText).then(({ id }) => {
        fetchQuestions().then(() => {
          history.push(`/question/${id}`);
        });
      });
    } else {
      setStatus({
        optionOneError: optionOneText.length < 1 && 'This field is required',
        optionTwoError:
          (optionTwoText.length < 1 && 'This field is required') ||
          (optionOneText === optionTwoText && 'The options must be different'),
      });
    }
  };
  return (
    <div>
      <form className={styles.cardContainer} onSubmit={onSubmit}>
        <h1 className={styles.cardTitle}>Create New Question</h1>
        <p>Complete the question:</p>
        <h2>Would you rather ...</h2>
        <input
          className={styles.inputClass}
          type="text"
          placeholder="Enter option One Text Here"
          onChange={(e) => setOptionOne(e.target.value)}
        />
        <span className={styles.error}>{status.optionOneError}</span>
        <span className={styles.divisorClass}>OR</span>
        <input
          className={styles.inputClass}
          type="text"
          placeholder="Enter option Two Text Here"
          onChange={(e) => setOptionTwo(e.target.value)}
        />
        <span className={styles.error}>{status.optionTwoError}</span>
        <button className={styles.buttonClass} type="submit" disabled={status.isLoading}>
          Submit
        </button>
        <div className={cx(styles.spinnerContainer, { isLoading: status.isLoading })}>
          <ClipLoader />
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
