import React from 'react';
import * as styles from './styles';

const Card = () => (
  <div className={styles.userCardClass}>
    <span className={styles.cardLogoClass}>★</span>
    <div>
      <img
        src="https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01-300x250.png"
        className={styles.userImage}
        alt="user"
      />
    </div>

    <div>
      <h2>Sarah Edo</h2>
      <table>
        <tbody>
          <tr>
            <td>Answered questions: </td>
            <td>
              <b>3</b>
            </td>
          </tr>
          <tr>
            <td>Created questions: </td>
            <td>
              <b>2</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <div className={styles.scoreContainer}>
        <h3>Score</h3>
        <span>10</span>
      </div>
    </div>
  </div>
);

export default Card;
