import { css } from 'emotion';
import { darkGray, grayBase, greenBase } from '../../../shared/colors';

export const userCardClass = css`
  display: flex;
  position: relative;
  border: 2px solid ${darkGray};
  padding: 10px 0;
  flex: 1;

  > div:first-of-type,
  > div:last-of-type {
    width: 180px;
  }
`;

export const cardLogoClass = css`
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  border-radius: 0 2px 33px 0;
  padding: 4px 16px;

  li:first-child & {
    color: gold;
  }

  li:nth-child(2) & {
    color: silver;
  }

  li:last-child & {
    color: #cd7f32;
  }
`;

export const userImage = css`
  max-width: 80%;
`;

export const scoreContainer = css`
  border: 2px solid ${darkGray};
  border-radius: 24px;
  width: 100px;
  height: 100px;
  margin: 10px auto;

  h3 {
    background-color: ${grayBase};
    margin: 0;
    padding: 5px 0;
    text-align: center;
    border-radius: 24px 24px 0 0;
  }

  span {
    background-color: ${greenBase};
    color: white;
    padding: 7px;
    border-radius: 20px;
    margin: 13px auto;
    display: block;
    width: 1.1rem;
    text-align: center;
  }
`;
