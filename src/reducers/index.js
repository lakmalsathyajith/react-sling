import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import webAppReducer from './webReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  webAppReducer,
  routing: routerReducer
});

export default rootReducer;
