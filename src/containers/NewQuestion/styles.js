import { css } from 'emotion';
import { greenBase } from '../../shared/colors';

export const cardContainer = css`
  border: 2px solid #ebebeb;
  border-radius: 5px;
  margin: 10px auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;

  p,
  h2 {
    padding-left: 3%;
  }
`;

export const cardTitle = css`
  background: #f7f7f7;
  padding: 10px;
  margin: 0;
  font-family: sans-serif;
  font-size: 22px;
`;

export const inputClass = css`
  display: block;
  width: 90%;
  height: 30px;
  margin: 5px auto;
`;

export const divisorClass = css`
  font-weight: bold;
  text-align: center;
  position: relative;

  :before {
    display: block;
    content: '';
    position: absolute;
    left: 5%;
    width: 90%;
    border: 1px solid #ebebeb;
    top: 7px;
    z-index: -2;
  }

  :after {
    display: block;
    content: '';
    position: absolute;
    left: 42%;
    width: 5rem;
    top: 7px;
    height: 40px;
    background-color: white;
    z-index: -1;
  }
`;

export const buttonClass = css`
  width: 90%;
  padding: 7px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
  color: white;
  border-color: white;
  background: ${greenBase};
  margin: 20px auto;

  &:active,
  &:hover {
    background-color: white;
    border: 1px solid ${greenBase};
    color: ${greenBase};
    transition: all 0.3s;
  }
`;
