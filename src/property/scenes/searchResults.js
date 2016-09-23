'use strict';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {ListView} from 'react-native';
import SearchResultRowItem from '../components/searchResultRowItem';
import {Actions} from "react-native-router-flux";
import atomicStyles from '../../shared/styles/atomicStyles';

class SearchResults extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.properties)
    };
  }

  renderRow(rowProps) {
    const rowPressed = () => {
      Actions.PropertyDetails({property: rowProps});
    };
    return <SearchResultRowItem {...rowProps} onPress={rowPressed}/>
  }

  render() {
    return (
      <ListView
        style={atomicStyles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}/>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    properties: state.properties
  };
}

module.exports = connect(
  mapStateToProps,
)(SearchResults);
