import React from 'react';
import * as styles from './styles';

const LeaderBoard = () => (
  <div>
    <ul className={styles.leaderBoardClass}>
      <li>
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
              <tr>
                <td>Answered questions</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Created questions</td>
                <td>2</td>
              </tr>
            </table>
          </div>

          <div>
            <div>
              <h3>Score</h3>
              <span>10</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default LeaderBoard;
