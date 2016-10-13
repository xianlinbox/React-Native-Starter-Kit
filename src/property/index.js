import React from 'react';
import {Scene} from 'react-native-router-flux';
import TabIcon from '../shared/components/tabIcon';
import Search from './scenes/searchScene';
import SearchResults from './scenes/searchResultsScene';
import PropertyView from './scenes/propertyDetailsScene';
import {themeBlue} from '../shared/styles/brandColors'

const navigationBarStyle = {
  backgroundColor: themeBlue
}

export default () => {
  return (
    <Scene key='Property'
           initial={true}
           title='Property'
           icon={TabIcon}
           navigationBarStyle={navigationBarStyle}
           titleStyle={{color:'white'}}>
      <Scene key='Search' component={Search} title='Search'/>
      <Scene key='SearchResults' component={SearchResults} title='Results'/>
      <Scene key='PropertyDetails' component={PropertyView} title='Property Details'/>
    </Scene>
  );
}
