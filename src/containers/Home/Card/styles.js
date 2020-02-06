import { css } from 'emotion';

export const cardContainer = css`
  border: 2px solid #ebebeb;
  border-radius: 5px;
  margin: 10px;
`;

export const cardTitle = css`
  background: #f7f7f7;
  padding: 10px;
  margin: 0;
`;

export const cardContent = css`
  display: flex;
  height: 150px;
  padding: 10px;
  border-top: 2px solid #ebebeb;
`;

export const avatar = css`
  display: flex;
  align-items: center;
  padding: 2.5em;
  box-sizing: border-box;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const cardInfo = css`
  border-left: 2px solid #ebebeb;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  h3 {
    margin: 0;
  }
`;

export const button = css`
  width: 100%;
  padding: 7px;
  border: 1px solid green;
  color: green;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;

  &:active,
  &:hover {
    color: white;
    border-color: white;
    background: green;
    transition: all 0.3s;
  }
`;
