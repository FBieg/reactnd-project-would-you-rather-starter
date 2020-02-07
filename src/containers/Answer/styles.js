import { css } from 'emotion';
import { greenBase } from '../../shared/colors';

export const cardContainer = css`
  border: 2px solid #ebebeb;
  border-radius: 5px;
  margin: 10px auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

export const cardTitle = css`
  background: #f7f7f7;
  padding: 10px;
  margin: 0;
  font-family: sans-serif;
  font-size: 22px;
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

export const contentWrapper = css`
  img {
    display: block;
    margin: 0 auto;
    width: 150px;
  }
`;

export const formContainer = css`
  padding: 0 15px;

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 5px;
    }
  }
`;
