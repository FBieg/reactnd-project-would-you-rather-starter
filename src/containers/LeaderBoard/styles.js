import { css } from 'emotion';

export const leaderBoardClass = css`
  list-style: none;
  padding: 0;
  margin: 50px auto;
  max-width: 550px;

  li {
    margin: 30px 0;
  }
`;

export const spinnerContainer = css`
  display: none;
  margin: 20px 0;

  &.isLoading {
    display: flex;
    justify-content: center;
  }
`;