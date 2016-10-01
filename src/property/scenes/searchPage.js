import {connect} from 'react-redux';
import * as PropertyActions from '../actions/propertyActions';
import SearchPage from '../components/searchPage';

function mapStateToProps(state) {
  const {loadingReducer, errorReducer, propertyReducer} = state;
  const {errorMessage} = errorReducer;
  const {isLoading} = loadingReducer;
  const {searchReducer:{request}} = propertyReducer;

  return {
    errorMessage,
    request,
    isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    search: (request) => dispatch(PropertyActions.search(request))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
