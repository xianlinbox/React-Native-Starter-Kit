import {CLEAR_ERROR_MESSAGE, SAVE_ERROR_MESSAGE} from '../actions/sharedActionTypes';

export default (state = '', action = {}) => {
  switch (action.type) {
    case SAVE_ERROR_MESSAGE:
      return action.payload;
    case CLEAR_ERROR_MESSAGE:
      return '';
    default:
      return state;
  }
};
