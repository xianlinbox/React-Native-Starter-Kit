import React from 'react';
import {Text} from 'react-native';
import {storiesOf, action, linkTo} from '@kadira/react-native-storybook';

import TabIcon from '../../src/shared/components/tabIcon';
import SearchResultRowItem from '../../src/property/components/searchResultRowItem';
import SearchPage from '../../src/property/components/searchPage';

storiesOf('Home', module)
  .add('tabIcon', () => (
    <TabIcon selected={true} title="test"/>
  ));

storiesOf('Property', module)
  .add('SearchPage', () => (
    <SearchPage request={{place_name:"London"}} isLoading={false} search={() => {console.log('Seach called')}}/>
  ))
  .add('SearchResultItem', () => (
    <SearchResultRowItem
      title="Property -1"
      price_formatted="$100,000"
      img_url='../../src/shared/resources/house'
      rowID={1}
      onPress={()=>{}}/>
  ));

