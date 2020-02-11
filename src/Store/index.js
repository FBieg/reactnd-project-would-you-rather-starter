import { createStore } from 'redux';

const initialState = {
  users: {},
  questions: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.data,
      };
    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.data,
      };
    default:
      return state;
  }
};

export default createStore(rootReducer);
