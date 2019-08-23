import { loadFBReducer, currentQuizReducer } from './quizReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  quizzes: loadFBReducer,
  currentQuiz: currentQuizReducer
});

export default rootReducer;
