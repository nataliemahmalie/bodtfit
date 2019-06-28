import { combineReducers } from 'redux';

import { reducer as exerciseReducer } from "../modules"

// Combine all the reducers
const rootReducer = combineReducers({ exerciseReducer });

export default rootReducer;