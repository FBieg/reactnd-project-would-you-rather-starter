import { createStore } from 'redux';
import { _getQuestions } from '../_DATA';

const userData = JSON.parse(localStorage.getItem('userData'));

const initialState = {
  user: {
    isLogged: Boolean(userData),
    data: userData || {},
  },
  questions: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        user: {
          isLogged: true,
          data: action.data,
        },
      };
    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.data,
      };
    case 'LOG_OUT':
      return { ...initialState, user: { ...initialState.user, isLogged: false } };
    default:
      return state;
  }
};

export const mapStateToProps = ({ user, questions }) => {
  return {
    user,
    questions,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setUserLogged: (userData) => {
      localStorage.setItem('userData', JSON.stringify(userData));
      dispatch({ type: 'SET_USER_DATA', data: userData });
    },
    userLogout: () => {
      localStorage.removeItem('userData');
      dispatch({ type: 'LOG_OUT' });
    },
    fetchQuestions: () => {
      _getQuestions().then((users) =>
        dispatch({ type: 'SET_QUESTIONS', data: Object.values(users) })
      );
    },
  };
};

export default createStore(rootReducer);
