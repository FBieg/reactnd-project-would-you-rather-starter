import React from 'react';
import * as styles from './styles';

const NewQuestion = () => (
  <div>
    <form className={styles.cardContainer}>
      <h1 className={styles.cardTitle}>Create New Question</h1>
      <p>Complete the question:</p>
      <h2>Would you rather ...</h2>
      <input className={styles.inputClass} type="text" placeholder="Enter option One Text Here" />
      <span className={styles.divisorClass}>OR</span>
      <input className={styles.inputClass} type="text" placeholder="Enter option Two Text Here" />
      <button className={styles.buttonClass} type="submit">Submit</button>
    </form>
  </div>
);

export default NewQuestion;
