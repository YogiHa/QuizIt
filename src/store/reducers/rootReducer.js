import { authReducer } from './authReducer';
import { loadFBReducer, currentQuizReducer } from './quizReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  quizzes: loadFBReducer,
  currentQuiz: currentQuizReducer,
  firebase: firebaseReducer
});

export default rootReducer;
