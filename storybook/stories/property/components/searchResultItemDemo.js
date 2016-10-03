import React from 'react';
import {storiesOf} from '@kadira/react-native-storybook';

import SearchResultRowItem from '../../../../src/property/components/searchResultRowItem';

storiesOf('Property', module)
  .add('SearchResultItem', () => (
    <SearchResultRowItem
      title="Property -1"
      price_formatted="$100,000"
      img_url='../../src/shared/resources/house'
      rowID={1}
      onPress={()=>{}}/>
  ));

