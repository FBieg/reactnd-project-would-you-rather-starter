import React, { useState, useEffect } from 'react';
import Card from './Card';
import { _getQuestions } from '../../_DATA';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../Store';
import * as styles from './styles';
import { cx } from 'emotion';

const Home = props => {
  const [unanswered, setUnanswered] = useState(true);
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    _getQuestions().then(users => setQuestionList(Object.values(users)));
  }, []);

  console.log(questionList)

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
        {questionList.map((data, index)=> (
          <li key={index.toString()}>
            <Card data={data}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
