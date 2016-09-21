'use strict';
import React, {Component} from 'react';
import {ListView} from 'react-native';
import SearchResultRowItem from '../components/searchResultRowItem';
import PropertyView from './propertyView';

class SearchResults extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

  rowPressed = (propertyGuid) => {
    const property = this.props.listings.filter(prop => prop.guid === propertyGuid)[0];
    this.props.navigator.push({
      title: "Property Details",
      component: PropertyView,
      params: {
        property: property
      }
    });
  };

  renderRow(rowProps) {
    console.log("****************");
    console.log(this.rowPressed);
    return <SearchResultRowItem {...rowProps} onPress={this.rowPressed}/>
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
