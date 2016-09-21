'use strict';
import React, {Component} from 'react';
import {ListView} from 'react-native';
import SearchResultRowItem from '../components/searchResultRowItem';
import {Actions} from "react-native-router-flux";

class SearchResults extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
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
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}/>
    );
  }
}

module.exports = SearchResults;
