import React from 'react';
import {Text} from 'react-native';
import {storiesOf, action, linkTo} from '@kadira/react-native-storybook';

import {properties} from './fakeData/properties';

import TabIcon from '../../src/shared/components/tabIcon';
import SearchResultRowItem from '../../src/property/components/searchResultRowItem';
import SearchPage from '../../src/property/components/searchPage';
import SearchResultsPage from '../../src/property/components/searchResultsPage';
import PropertyDetailsPage from '../../src/property/components/propertyDetailsPage';

storiesOf('Home', module)
  .add('tabIcon', () => (
    <TabIcon selected={true} title="test"/>
  ));

storiesOf('Property', module)
  .add('SearchPage', () => (
    <SearchPage request={{place_name:"London"}} isLoading={false} search={() => {console.log('Seach called')}}/>
  ))
  .add('SearchResultsPage', () => (
    <SearchResultsPage
      properties={properties}
      rowPressed={({rowID}) => {console.log(`click ${rowID} row`)}}/>
  ))
  .add('PropertyDetailsPage', () => (
    <PropertyDetailsPage property={properties[0]}/>
  ))
  .add('SearchResultItem', () => (
    <SearchResultRowItem
      title="Property -1"
      price_formatted="$100,000"
      img_url='../../src/shared/resources/house'
      rowID={1}
      onPress={()=>{}}/>
  ));

