import {SEARCH, SAVE_PROPERTIES, CHECK_PROPERTY_DETAILS} from '../actions/propertyActionTypes';

export default (state = {}, action = {}) => {
  console.log('action' + action);
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchString: action.payload
      };
    case SAVE_PROPERTIES:
      return {
        ...state,
        properties: action.payload
      };
    case CHECK_PROPERTY_DETAILS:
      return {
        ...state,
        currentProperty: action.payload
      };
    default:
      return state;
  }
}
