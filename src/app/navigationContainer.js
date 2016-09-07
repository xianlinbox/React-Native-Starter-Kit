import {connect} from 'react-redux';
import NavigationRoot from './navigationRoot';
import * as actions from './navigationActions';

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  };
}
function mapDispatchToProps(dispatch) {
  return {
    goToSearchResults: properties => {
      dispatch(actions.goToSearchResults(properties));
    },
    goToPropertyDetails: (property) => dispatch(actions.goToPropertyDetails(property)),
    onNavigate: payload => dispatch(actions.onNavigate(payload))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationRoot);
