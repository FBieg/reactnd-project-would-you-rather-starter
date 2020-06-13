import { css } from 'emotion';
import { greenBase } from '../../../shared/colors';

export const button = css`
  width: 100%;
  padding: 7px;
  border: 1px solid ${greenBase};
  color: ${greenBase};
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;

  &:active,
  &:hover {
    color: white;
    border-color: white;
    background: ${greenBase};
    transition: all 0.3s;
  }
`;

export const resultQuestion = css`
  background: #007f804f;
  border: 1px solid ${greenBase};
  padding: 10px;
`;

export const question = css`
  margin: 0;
  margin-bottom: 10px;
  color: black;
`;

export const percentBar = css`
  background: #ebebeb;
  border-radius: 5px;
`;

export const percent = css`
  background: ${greenBase};
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
