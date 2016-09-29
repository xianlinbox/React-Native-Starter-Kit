import {combineReducers} from 'redux';
import searchReducer from './searchPropertyReducer';
import selectPropertyReducer from './selectPropertyReducer';
import routes from './propertyRoutesReducer';

export default combineReducers({
  routes,
  searchReducer,
  selectPropertyReducer
})