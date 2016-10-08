import {connect} from 'react-redux';
import * as PropertyActions from '../actions/propertyActions';
import SearchPage from '../components/searchPage';

function mapStateToProps(state) {
  const {isLoading, errorMessage, property} = state;
  const {search:{request}} = property;

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
