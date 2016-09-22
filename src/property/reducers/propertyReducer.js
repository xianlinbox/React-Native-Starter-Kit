import {SEARCH, CHECK_PROPERTY_DETAILS} from '../actions/propertyActionTypes';

const initialState = {
  searchRequest: {},
  properties: [],
  currentProperty: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchRequest: action.payload
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
