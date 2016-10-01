import React, {Component} from 'react';
import {ListView} from 'react-native';
import SearchResultRowItem from '../components/searchResultRowItem';
import atomicStyles from '../../shared/styles/atomicStyles';

export default class SearchResultsPage extends Component {

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