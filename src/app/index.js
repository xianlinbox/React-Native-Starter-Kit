import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import CodePush from 'react-native-code-push';
import {Provider} from 'react-redux';
import configStore from './configStore'
import PropertyScenes from '../property/index';
import CarScenes from '../car/index';

import {
Scene,
Router
} from 'react-native-router-flux';

const codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME };
const RouterWithRedux = connect()(Router);
export default class PropertyFinder extends Component {
  componentDidMount() {
    CodePush.sync({
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE
    });

  }

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

module.exports = CodePush(codePushOptions)(PropertyFinder);