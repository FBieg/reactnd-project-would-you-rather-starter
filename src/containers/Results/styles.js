import { css } from 'emotion';

export const cardContainer = css`
  border: 2px solid #ebebeb;
  border-radius: 5px;
  margin: 10px auto;
  max-width: 420px;
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
  margin: 15px;
  box-sizing: border-box;

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
`;

export const cardInfo = css`
  border-left: 2px solid #ebebeb;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  position: relative;

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

export const resultQuestion = css`
  background: #007f804f;
  border: 1px solid green;
  padding: 10px;
`;

export const question = css`
  margin: 0;
  margin-bottom: 10px;
  color: green;
`;

export const percentBar = css`
  background: #ebebeb;
  border-radius: 5px;
`;

export const percent = css`
  background: green;
  color: white;
  display: inline-block;
  border-radius: 5px;
  text-align: right;
  padding-right: 5px;
`;

export const average = css`
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
`;

export const yourVote = css`
  color: white;
  font-weight: bold;
  display: block;
  background: gold;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  text-align: center;
  padding-top: 10px;
  line-height: 1;
  box-sizing: border-box;
  font-size: 12px;
  border: 1px dashed #ebebeb;
  position: absolute;
  top: 30px;
  right: -10px;
`;
