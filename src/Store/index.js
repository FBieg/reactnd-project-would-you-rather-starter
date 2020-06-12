import { createStore } from 'redux';

const userData = JSON.parse(localStorage.getItem("userData"));

const initialState = {
  user: {
    isLogged: Boolean(userData),
    data: userData || {},
  },
  questions: {},
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
      return initialState
    default:
      return state;
  }
};

export const mapStateToProps = ({ user, questions, unanswered }) => {
  return {
    user,
    questions,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    setUserLogged: userData => {
      localStorage.setItem("userData", JSON.stringify(userData))
      dispatch({ type: 'SET_USER_DATA', data: userData });
    },
    userLogout: () => {
      localStorage.removeItem("userData")
      dispatch({type: 'LOG_OUT'})
    },
  };
};

export default createStore(rootReducer);
