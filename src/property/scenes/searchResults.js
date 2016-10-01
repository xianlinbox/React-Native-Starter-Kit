
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView} from 'react-native';
import {Actions as RouterActions} from 'react-native-router-flux';
import SearchResultRowItem from '../components/searchResultRowItem';
import atomicStyles from '../../shared/styles/atomicStyles';
import * as PropertyActions from '../actions/propertyActions';

class SearchResults extends Component {

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.properties),
      onRowPress: this.props.rowPressed,
    };
  }

  renderRow(rowProps, sectionID, rowID) {
    return <SearchResultRowItem {...rowProps} rowID={rowID} onPress={this.state.onRowPress} />;
  }

render() {
  return (
    <ListView
      style={atomicStyles.container}
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)} />
  );
}
}

function mapStateToProps(state) {
  const {propertyReducer} = state;
  const {searchReducer:{properties}} = propertyReducer;
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
