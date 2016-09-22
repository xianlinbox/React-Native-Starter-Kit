import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import PropertyScenes from '../property/index';
import CarScenes from '../car/index';

import {
  Scene,
  Router
} from 'react-native-router-flux';

export default class PropertyFinder extends Component {
  render() {
    return (
      <Router>
        <Scene key='home' tabs={true}>
          {PropertyScenes()}
          {CarScenes()}
        </Scene>
      </Router>
    );
  }
}

module.exports = PropertyFinder;