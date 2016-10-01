import React from 'react';
import {Text} from 'react-native';
import {storiesOf, action, linkTo} from '@kadira/react-native-storybook';

import TabIcon from '../../src/shared/components/tabIcon';
import SearchResultRowItem from '../../src/property/components/searchResultRowItem';
import SearchPage from '../../src/property/components/searchPage';
import SearchResultsPage from '../../src/property/components/searchResultsPage';

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
      properties={[
      {
      title:"Property -1",
      price_formatted:"$100,000",
      img_url:'../../src/shared/resources/house',
      },
      {
      title:"Property -2",
      price_formatted:"$200,000",
      img_url:'../../src/shared/resources/house'
      }
    ]}
      rowPressed={({rowID}) => {console.log(`click ${rowID} row`)}}/>
  ))
  .add('SearchResultItem', () => (
    <SearchResultRowItem
      title="Property -1"
      price_formatted="$100,000"
      img_url='../../src/shared/resources/house'
      rowID={1}
      onPress={()=>{}}/>
  ));

