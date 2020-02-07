import { css } from 'emotion';
import { greenBase } from '../../shared/colors';

export const cardContainer = css`
  border: 2px solid #ebebeb;
  border-radius: 5px;
  margin: 10px auto;
  max-width: 600px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const cardHeader = css`
  background: #f7f7f7;
  padding: 10px;
  margin: 0;
  flex-direction: column;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ebebeb;
  width: 100%;
  padding: 15px 0;

  h2 {
    font-size: 17px;
    margin-bottom: 0;
  }
`;

export const reactLogoClass = css`
  width: 300px;
`;

export const signInTitle = css`
  color: ${greenBase};
  font-weight: bold;
`;

export const usersDropdown = css`
  width: 90%;
  height: 2rem;
  background-color: white;
  border-radius: 0;
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
