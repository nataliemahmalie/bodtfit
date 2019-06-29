import { combineReducers } from 'redux';
import { reducer as exerciseReducer } from "../modules"
const rootReducer = combineReducers({ exerciseReducer });
export default rootReducer;