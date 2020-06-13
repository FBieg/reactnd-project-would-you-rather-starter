import { createStore } from 'redux';
import { _getQuestions, _saveQuestionAnswer, _saveQuestion, _getUsers } from '../_DATA';

const userData = JSON.parse(localStorage.getItem('userData'));

const initialState = {
  user: {
    isLogged: Boolean(userData),
    data: userData || {},
  },
  questions: [],
  userList: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_LIST':
      return {
        ...state,
        userList: action.data,
      };
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

export const mapStateToProps = ({ user, questions, userList }) => {
  return {
    user,
    questions,
    userList,
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
    fetchQuestions: () =>
      _getQuestions().then((questions) =>
        dispatch({ type: 'SET_QUESTIONS', data: Object.values(questions) })
      ),
    fetchUsers: () =>
      _getUsers().then((users) => dispatch({ type: 'SET_USER_LIST', data: Object.values(users) })),

    saveQuestionAnswer: (userId, questionId, answer) =>
      _saveQuestionAnswer({ authedUser: userId, qid: questionId, answer }),

    saveQuestion: (author, optionOneText, optionTwoText) =>
      _saveQuestion({
        author,
        optionOneText,
        optionTwoText,
      }),
  };
};

export default createStore(rootReducer);
