import {connect} from 'react-redux';
import PropertyDetatisPage from '../components/propertyDetailsPage';

function mapStateToProps(state) {
  const {
    propertyReducer:{
      searchReducer:{properties},
      selectPropertyReducer:{selectedProperty}
    }
  } = state;
  return {
    property: properties[selectedProperty],
  };
}

module.exports = connect(mapStateToProps)(PropertyDetatisPage);