import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import PropertyScenes from '../property/index';

import {
  Scene,
  Router
} from 'react-native-router-flux';

export default class PropertyFinder extends Component {
  render() {
    return (
      <Router>
        {PropertyScenes()}
      </Router>
    );
  }
}

module.exports = PropertyFinder;