import {combineReducers} from 'redux';
import wordsReducer from './wordsReducer';
import uiReducer from './uiReducer';
export default combineReducers({wordsState: wordsReducer, uiState: uiReducer});
