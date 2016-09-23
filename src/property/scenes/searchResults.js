'use strict';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {ListView} from 'react-native';
import SearchResultRowItem from '../components/searchResultRowItem';
import {Actions as RouterActions} from "react-native-router-flux";
import atomicStyles from '../../shared/styles/atomicStyles';
import * as PropertyActions from "../actions/propertyActions";

class SearchResults extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.properties),
      onRowPress: this.props.rowPressed
    };
  }

  renderRow(rowProps) {
    return <SearchResultRowItem {...rowProps} onPress={this.state.onRowPress}/>
  }

  render() {
    return (
      <ListView
        style={atomicStyles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    properties: state.properties
  };
}

function mapDispatchToProps(dispatch) {
  return {
    rowPressed: (property) => {
      dispatch(PropertyActions.checkPropertyDetails(property));
      RouterActions.PropertyDetails();
    }
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
