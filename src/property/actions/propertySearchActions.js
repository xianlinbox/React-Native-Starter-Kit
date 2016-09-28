import {UPDATE_SEARCH_STRING, UPDATE_SEARCH_RESULT} from './propertyActionTypes'
import {createAction} from 'redux-actions';
import {findProperties} from "../../shared/api/propertiesApi";
import {startLoading, endLoading} from "../../shared/actions/loadingAction";
import {Actions as RouterActions} from "react-native-router-flux";

const updateSearchString = createAction(UPDATE_SEARCH_STRING);
const updateSearchResult = createAction(UPDATE_SEARCH_RESULT);


export const  search = (request) => {
  return dispatch => {
    dispatch(startLoading());
    dispatch(updateSearchString(request));
    return findProperties(request, (result) => {
      dispatch(endLoading());
      if (result.application_response_code.substr(0, 1) === '1') {
        dispatch(updateSearchResult(result.listings));
        // RouterActions.SearchResults();
      } else {
        // this.setState({message: 'Location not recognized; please try again.'});
      }
    }, (error) => {
      dispatch(endLoading());
      dispatch(updateSearchResult(error))
    });
  }
};