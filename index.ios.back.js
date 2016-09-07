import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import configureStore from './src/app/configureStore';
import NavigationRootContainer from './src/app/NavigationRootContainer';

const store = configureStore();

class PropertyFinder extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationRootContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
