import { css } from 'emotion';
import * as colors from './shared/colors';

export const navClass = css`
  border-bottom: 2px solid ${colors.greenBase};
`;

export const menuClass = css`
  list-style: none;
  display: flex;

  a {
    color: black;
    text-decoration: none;
    margin: 0 10px;
    padding: 10px 5px;
  }

  a:hover {
    background-color: ${colors.greenBase};
    color: white;
  }
`;
