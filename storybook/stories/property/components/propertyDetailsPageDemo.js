import React from 'react';
import {storiesOf} from '@kadira/react-native-storybook';

import {properties} from '../fakeData/properties';
import PropertyDetailsPage from '../../../../src/property/components/propertyDetailsPage';

storiesOf('Property', module)
  .add('PropertyDetailsPage-1', () => (
    <PropertyDetailsPage property={properties[0]}/>
  ))
  .add('PropertyDetailsPage-2', () => (
    <PropertyDetailsPage property={properties[1]}/>
  ));