import {connect} from 'react-redux';
import PropertyDetatisPage from '../components/propertyDetailsPage';

function mapStateToProps(state) {
  const {
    property:{
      search:{properties},
      selectedProperty
    }
  } = state;
  return {
    property: properties[selectedProperty],
  };
}

module.exports = connect(mapStateToProps)(PropertyDetatisPage);