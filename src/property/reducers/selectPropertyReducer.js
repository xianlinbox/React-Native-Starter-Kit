import {SELECT_PROPERTY} from '../actions/propertyActionTypes';

export default (state = -1, action = {}) => {
  switch (action.type) {
    case SELECT_PROPERTY:
      return action.payload;
    default:
      return state;
  }
};
