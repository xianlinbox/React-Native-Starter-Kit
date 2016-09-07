import globalNavigation from './navigationReducer';
import {combineReducers} from 'redux';

const applicationReducers = {
  globalNavigation
};

export default function createReducer() {
  return combineReducers(applicationReducers);
}