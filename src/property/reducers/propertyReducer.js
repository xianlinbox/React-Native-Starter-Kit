import {UPDATE_SEARCH_STRING, UPDATE_SEARCH_RESULT} from '../actions/propertyActionTypes';

const initPropertySearchState = {request: {place_name: 'London'}};

export default (state = initPropertySearchState, action = {}) => {
  // console.log("typr****", action.type);
  // console.log("payload****", action.payload);
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
}
