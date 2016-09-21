import test from 'ava';
import {shallow} from 'enzyme';
import React, {ListView} from 'react-native';
import sinon from 'sinon';
import SearchResults from '../searchResults';

var component;
var onPressStub;

test.before(() => {
  onPressStub = sinon.stub();
  const properties = [
    {
      price_formatted: '£929,995',
      title: 'propertyTitle-1',
      img_url: 'image-1',
      rowID: 1,
      onPress: onPressStub
    },
    {
      price_formatted: '£629,995',
      title: 'propertyTitle-2',
      img_url: 'image-2',
      rowID: 1,
      onPress: onPressStub
    }
  ];
  component = shallow(<SearchResults listings={properties}/>);
});

test.only('renders a ListView component', t => {
  t.is(component.find(ListView).length, 1);
});

test.after(() => {
  sinon.restore();
});