import { css } from 'emotion';

export const leaderBoardClass = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const userCardClass = css`
  display: flex;
  position: relative;

 flex: 1;

  div:first-of-type,
  div:last-of-type {
    width: 180px;
  }
`;

export const cardLogoClass = css`
  position: absolute;
  top: 0;
  left: 0;
`;

export const userImage = css`
  max-width: 80%;
`;
