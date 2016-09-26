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
import {findProperties} from "../../shared/api/propertiesApi";
import styles from './styles/searchPageStyles';

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
    this.setState({isLoading: true});
    findProperties(request, this._handleResponse.bind(this), this._handleError.bind(this));
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
    const {saveSearchString} = this.props;
    saveSearchString(this.state.searchString);
    this._executeQuery({place_name: this.state.searchString});
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
    searchString: state.searchString,
    isLoading: state.isLoading
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
