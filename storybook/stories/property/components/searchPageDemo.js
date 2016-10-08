import React from 'react';
import {storiesOf, action} from '@kadira/react-native-storybook';

import SearchPage from '../../../../src/property/components/searchPage';

storiesOf('Property', module)
  .add('SearchPage', () => (
    <SearchPage request={{place_name:"London"}} isLoading={false} search={action('Search called')}/>
  ));
