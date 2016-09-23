'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from "react-native-router-flux";
import * as PropertyActions from "../actions/propertyActions";
import styles from './styles/searchPageStyles';

function urlForQueryAndPage(key, value, pageNumber) {
  var data = {
    country: 'uk',
    pretty: '1',
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: pageNumber
  };
  data[key] = value;

  var querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'http://api.nestoria.co.uk/api?' + querystring;
};

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: props.searchString,
      isLoading: false,
      message: '',
      saveSearchString: props.saveSearchString,
      saveSearchResults: props.saveSearchResults
    };
  }

  onSearchTextChanged(event) {
    this.setState({searchString: event.nativeEvent.text});
  }

  onLocationPressed() {
    navigator.geolocation.getCurrentPosition(
      location => {
        var search = location.coords.latitude + ',' + location.coords.longitude;
        this.setState({searchString: search});
        var query = urlForQueryAndPage('centre_point', search, 1);
        PropertyActions.search(search);
        this._executeQuery(query);
      },
      error => {
        this.setState({
          message: 'There was a problem with obtaining your location: ' + error
        });
      });
  }

  _executeQuery(query) {
    console.log(query);
    this.setState({isLoading: true});
    fetch(query)
      .then(response => response.json())
      .then(json => this._handleResponse(json.response))
      .catch(error => {
        console.error(error);
        this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
        });
      });
  }

  _handleResponse(response) {
    const {saveSearchResults} = this.props;
    this.setState({isLoading: false, message: ''});
    if (response.application_response_code.substr(0, 1) === '1') {
      saveSearchResults(response.listings);
      Actions.SearchResults();
    } else {
      this.setState({message: 'Location not recognized; please try again.'});
    }
  }

  onSearchPressed() {
    const {saveSearchString} = this.props;
    saveSearchString(this.state.searchString);
    var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  }

  render() {
    const spinner = this.state.isLoading ? ( <ActivityIndicator size='large'/> ) : null;

    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name, postcode or search near your location.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            accessible={true}
            accessibilityLabel="CityName"
            name="city"
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via name or postcode'/>
          <TouchableHighlight style={styles.button}
                              underlayColor='#99d9f4'
                              testID="SearchButton"
                              onPress={this.onSearchPressed.bind(this)}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={styles.button}
                            onPress={this.onLocationPressed.bind(this)}
                            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Location</Text>
        </TouchableHighlight>
        <Image source={require('../../shared/resources/house.png')} style={styles.image}/>
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchString: state.searchString
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveSearchString: (searchString) => dispatch(PropertyActions.search(searchString)),
    saveSearchResults: (results) => dispatch(PropertyActions.saveProperties(results))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
