import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import PropertyScenes from '../property/index';
import CarScenes from '../car/index';
import {Provider} from 'react-redux';
import configStore from './configStore'
import { connect } from 'react-redux';

import {
Scene,
Router
} from 'react-native-router-flux';

const RouterWithRedux = connect()(Router);
export default class PropertyFinder extends Component {
  render() {
    return (
      <Provider store={configStore()}>
        <RouterWithRedux>
          <Scene key='home' tabs={true}>
            {PropertyScenes()}
            {CarScenes()}
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

module.exports = PropertyFinder;