import React from 'react';
import {Text} from 'react-native';
import {storiesOf, action, linkTo} from '@kadira/react-native-storybook';

import TabIcon from '../../src/shared/components/tabIcon';

storiesOf('Home', module)
  .add('tabIcon', () => (
    <TabIcon selected={true} title="test"/>
  ));

require('./property');
