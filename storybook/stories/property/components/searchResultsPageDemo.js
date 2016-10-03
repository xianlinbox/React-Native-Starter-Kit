import React from 'react';
import {storiesOf, linkTo} from '@kadira/react-native-storybook';

import {properties} from '../fakeData/properties';
import SearchResultsPage from '../../../../src/property/components/searchResultsPage';

storiesOf('Property', module)
  .add('SearchResultsPage', () => (
    <SearchResultsPage
      properties={properties}
      rowPressed={linkTo('Property', 'PropertyDetailsPage-1')}/>
  ));
