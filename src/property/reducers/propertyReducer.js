import {SEARCH, CHECK_PROPERTY_DETAILS} from '../actions/propertyActionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchString: action.payload
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
