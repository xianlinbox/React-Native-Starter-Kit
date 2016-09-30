import {
  START_LAODING,
  END_LOADING,
} from '../actions/sharedActionTypes';

export default (state = {isLoading: false}, action = {}) => {
  switch (action.type) {
    case START_LAODING:
      return {
        ...state,
        isLoading: true,
      };
    case END_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
