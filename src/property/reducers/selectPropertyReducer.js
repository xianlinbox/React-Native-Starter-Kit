import {SELECT_PROPERTY} from '../actions/propertyActionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SELECT_PROPERTY:
      return {
        ...state,
        selectedProperty: action.payload
      };
    default:
      return state;
  }
};