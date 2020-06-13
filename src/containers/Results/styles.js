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