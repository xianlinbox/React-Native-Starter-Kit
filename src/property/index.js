import React from 'react';
import {Scene} from 'react-native-router-flux';
import TabIcon from '../shared/components/tabIcon';
import Search from './scenes/searchPage';
import SearchResults from './scenes/searchResults';
import PropertyView from './scenes/propertyView';

export default () => {
  return (
    <Scene key='Property'
           initial={true}
           title='Property'
           icon={TabIcon}
           navigationBarStyle={{backgroundColor:'red'}}
           titleStyle={{color:'white'}}>
      <Scene key='Search' component={Search} title='Search'/>
      <Scene key='SearchResults' component={SearchResults} title='Results'/>
      <Scene key='PropertyDetails' component={PropertyView} title='Property Details'/>
    </Scene>
  );
}
