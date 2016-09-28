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
import * as _ from 'lodash';
import * as PropertyActions from "../actions/propertySearchActions";
import styles from './styles/searchPageStyles';


class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      placeName: props.request.place_name,
      isLoading: props.isLoading,
      message: '',
      search: props.search
    };
  }

  onSearchTextChanged(event) {
    this.setState({request: event.nativeEvent.text});
  }

  onLocationPressed() {
    navigator.geolocation.getCurrentPosition(
      location => {
        var search = location.coords.latitude + ',' + location.coords.longitude;
        this.setState({request: search});
        PropertyActions.search(search);
        this._executeQuery({'centre_point': search});
      },
      error => {
        this.setState({
          message: 'There was a problem with obtaining your location: ' + error
        });
      });
  }

  _executeQuery(request) {
    this.props.search(request);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      request: nextProps.request,
      isLoading: nextProps.isLoading
    })
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

  _handleError(error) {
    console.error(error);
    this.setState({
      isLoading: false,
      message: 'Something bad happened ' + error
    });
  }

  onSearchPressed() {
    this._executeQuery({place_name: this.state.placeName});
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
            value={this.state.placeName}
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

  const {loadingReducer, propertyReducer} = state;
  const {isLoading} = loadingReducer;
  const {request} = propertyReducer;

  return {
    request,
    isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    search: (request) => dispatch(PropertyActions.search(request))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
