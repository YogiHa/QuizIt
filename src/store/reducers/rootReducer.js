import { loadFBReducer , currentQuizReducer} from './quizReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
	DBQuizzes: loadFBReducer,
	currentQuiz: currentQuizReducer
});

export default rootReducer