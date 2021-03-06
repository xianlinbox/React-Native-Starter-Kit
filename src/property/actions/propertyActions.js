import {UPDATE_SEARCH_STRING, UPDATE_SEARCH_RESULT, SELECT_PROPERTY} from './propertyActionTypes'
import {createAction} from 'redux-actions';
import {findProperties} from "../../shared/api/propertiesApi";
import {startLoading, endLoading} from "../../shared/actions/loadingAction";
import {saveErrorMessage, clearErrorMessage} from "../../shared/actions/errorAction";
import {Actions as RouterActions} from "react-native-router-flux";

export const selectProperty = createAction(SELECT_PROPERTY);
export const updateSearchString = createAction(UPDATE_SEARCH_STRING);
export const updateSearchResult = createAction(UPDATE_SEARCH_RESULT);


export const search = (request) => {
  return dispatch => {
    dispatch(clearErrorMessage());
    dispatch(startLoading());
    dispatch(updateSearchString(request));
    return findProperties(request, (result) => {
      dispatch(endLoading());
      if (result.application_response_code.substr(0, 1) === '1') {
        dispatch(updateSearchResult(result.listings));
        RouterActions.SearchResults();
      } else {
        dispatch(saveErrorMessage('Location not recognized; please try again.'));
      }
    }, (error) => {
      console.error(error);
      dispatch(endLoading());
      dispatch(saveErrorMessage('Something bad happened ' + error));
    });
  }
};