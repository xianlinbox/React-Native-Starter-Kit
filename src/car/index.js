import React from 'react';
import {Scene} from 'react-native-router-flux';
import TabIcon from '../shared/components/tabIcon';
import Foo from './scenes/foo';

export default () => {
  return (
    <Scene key='Car' title='Car' icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}}
           titleStyle={{color:'white'}}>
      <Scene key='foo' component={Foo} title='Car'/>
    </Scene>
  );
}
