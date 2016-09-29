import {combineReducers} from 'redux';
import {UPDATE_SEARCH_STRING, UPDATE_SEARCH_RESULT} from '../actions/propertyActionTypes';
import routes from './propertyRoutesReducer';

const initPropertySearchState = {request: {place_name: 'London'}};

const searchReducer = (state = initPropertySearchState, action = {}) => {
  switch (action.type) {
    case UPDATE_SEARCH_STRING:
      return {
        ...state,
        request: action.payload
      };
    case UPDATE_SEARCH_RESULT:
      return {
        ...state,
        properties: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  searchReducer,
  routes
})