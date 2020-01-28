import React from 'react';

const LeaderBoard = () => (
  <div>
    <ul>
      <li>
        <div>
          <span>Logo</span>
          <div>
            <img
              src="https://www.ctvalleybrewing.com/wp-content/uploads/2017/04/avatar-placeholder.png"
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
