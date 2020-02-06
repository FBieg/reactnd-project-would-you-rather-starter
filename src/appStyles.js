import { css } from 'emotion';
import * as colors from './shared/colors';

export const navClass = css`
  border-bottom: 2px solid ${colors.greenBase};
`;

export const listItem = css`
  position: relative;
`;

export const menuClass = css`
  list-style: none;
  display: flex;
  position: relative;
  margin: 10px 0 0 0;

  a {
    color: black;
    text-decoration: none;
    margin: 0;
    padding: 0px 45px;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    width: 80px;
    display: inline-block;
    border-bottom: 50px solid transparent;
    transition: all 0.5s;

    &:hover {
      border-bottom-color: ${colors.greenBase};
      transition: all 0.3s;
    }

    span {
      position: absolute;
      width: 100%;
      text-align: center;
      top: 15px;
      left: 0;
    }
  }

  a:hover {
    color: white;
  }
`;
