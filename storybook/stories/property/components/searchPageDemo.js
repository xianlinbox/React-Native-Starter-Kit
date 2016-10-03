import React from 'react';
import {storiesOf} from '@kadira/react-native-storybook';

import SearchPage from '../../../../src/property/components/searchPage';

storiesOf('Property', module)
  .add('SearchPage', () => (
    <SearchPage request={{place_name:"London"}} isLoading={false} search={() => {console.log('Seach called')}}/>
  ));
