import {
  START_LAODING,
  END_LOADING,
} from '../actions/sharedActionTypes';

export default (state = false, action = {}) => {
  switch (action.type) {
    case START_LAODING:
      return true;
    case END_LOADING:
      return false;
    default:
      return state;
  }
};
