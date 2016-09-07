import {ROUTES, GOTO_ROUTE} from './navigationConstants';

const initialState = {
  navigation: ROUTES.SEARCH
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GOTO_ROUTE:
      return {
        navigation: action.payload
      };
    default:
      return state;
  }
};
