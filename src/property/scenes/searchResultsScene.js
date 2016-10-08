import {connect} from 'react-redux';
import {Actions as RouterActions} from 'react-native-router-flux';
import * as PropertyActions from '../actions/propertyActions';
import SearchResults from '../components/searchResultsPage';

function mapStateToProps(state) {
  const {property} = state;
  const {search:{properties}} = property;
  return {
    properties,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    rowPressed: (propertyIndex) => {
      dispatch(PropertyActions.selectProperty(propertyIndex));
      RouterActions.PropertyDetails();
    }
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults);
