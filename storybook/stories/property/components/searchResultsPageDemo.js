import React from 'react';
import {storiesOf} from '@kadira/react-native-storybook';

import {properties} from '../fakeData/properties';
import SearchResultsPage from '../../../../src/property/components/searchResultsPage';

storiesOf('Property', module)
  .add('SearchResultsPage', () => (
    <SearchResultsPage
      properties={properties}
      rowPressed={({rowID}) => {console.log(`click ${rowID} row`)}}/>
  ));
