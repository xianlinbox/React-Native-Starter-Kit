import React from 'react';
import {Scene} from 'react-native-router-flux';
import TabIcon from '../shared/components/tabIcon';
import CarSearch from './scenes/carSearchScene';
import {themeBlue} from '../shared/styles/brandColors'

const navigationBarStyle = {
  backgroundColor: themeBlue
};

export default () => {
  return (
    <Scene key='Car' title='Car' icon={TabIcon} navigationBarStyle={navigationBarStyle}
           titleStyle={{color:'white'}}>
      <Scene key='foo' component={CarSearch} title='Car'/>
    </Scene>
  );
}
