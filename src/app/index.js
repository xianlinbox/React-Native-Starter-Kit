import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import PropertyScenes from '../property/index';
import CarScenes from '../car/index';
import {Provider} from 'react-redux';
import store from './store'

import {
  Scene,
  Router
} from 'react-native-router-flux';

export default class PropertyFinder extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key='home' tabs={true}>
            {PropertyScenes()}
            {CarScenes()}
          </Scene>
        </Router>
      </Provider>
    );
  }
}

module.exports = PropertyFinder;