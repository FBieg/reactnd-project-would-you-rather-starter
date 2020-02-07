import { css } from 'emotion';
import { greenBase } from '../../shared/colors';

export const contentWrapper = css`
    margin: 10px auto;
    max-width: 500px;
    border-radius: 5px;
    border: 2px solid #ebebeb;
`;

export const tabsContainer = css`
    display: flex;
    border-bottom: 2px solid #ebebeb;

    button {
        width: 50%;
        appearance: none;
        border: none;
        background: #efefef;
        line-height: 30px;
        color: #333;
        font-size: 14px;

        &:nth-child(n + 2) {
            border-left: 1px solid #ebebeb;
        }

        &.active {
            color: ${greenBase};
            background: #e0e0e0;
        }
    }
`;

export const cardsContainer = css`
    margin: 0;
    padding: 0;
    li {
        list-style: none;
    }
`;