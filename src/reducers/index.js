import { combineReducers } from 'redux';
import webAppReducer from './webReducer';
import userReducer from './userReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  webAppReducer,
  userReducer,
  routing: routerReducer
});

export default rootReducer;
