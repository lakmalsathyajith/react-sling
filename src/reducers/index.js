import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import webAppReducer from './webReducer';
import userReducer from './userReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  webAppReducer,
  userReducer,
  routing: routerReducer
});

export default rootReducer;
