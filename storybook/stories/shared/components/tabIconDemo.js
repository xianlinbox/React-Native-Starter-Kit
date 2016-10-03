import React from 'react';
import {storiesOf} from '@kadira/react-native-storybook';

import TabIcon from '../../../../src/shared/components/tabIcon';

storiesOf('Shared', module)
  .add('tabIcon', () => (
    <TabIcon selected={true} title="test"/>
  ));
