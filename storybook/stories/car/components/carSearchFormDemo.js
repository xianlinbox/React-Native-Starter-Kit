import React from 'react';
import {storiesOf, action} from '@kadira/react-native-storybook';

import CarSearchForm from '../../../../src/car/components/carSearchForm';

storiesOf('Car', module)
  .add('CarSearchForm', () => (
    <CarSearchForm handleSubmit={action('submit clicked')}/>
  ));
