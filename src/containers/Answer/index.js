import React from 'react';
import * as styles from './styles';

const Answer = () => (
  <div>
    <div className={styles.cardContainer}>
      <h2 className={styles.cardTitle}>Tyler McGinnis asks:</h2>
      <div className={styles.contentWrapper}>
        <img
          src="https://www.ctvalleybrewing.com/wp-content/uploads/2017/04/avatar-placeholder.png"
          alt="user"
        />
        <div className={styles.formContainer}>
          <h3>Would You Rather ...</h3>
          <form>
            <label>
              <input type="radio" name="answer" value="male" />
              Answer 1
            </label>
            <label>
              <input type="radio" name="answer" value="male" />
              Answer 2
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

export default Answer;
