import test from 'ava';
import {shallow} from 'enzyme';
import React, {View, Text, Image, TouchableHighlight} from 'react-native';
import sinon from 'sinon';
import SearchResultItem from '../searchResultRowItem';
import styles from '../styles/searchResultItemRowItemStyles'

var component;
var onPressStub;

test.before(() => {
  onPressStub = sinon.stub();
  const rowData = {
    price_formatted: '£929,995',
    title: 'propertyTitle',
    img_url: 'image',
    rowID: 1,
    onPress: onPressStub
  };
  component = shallow(<SearchResultItem {...rowData} />);
});

test('renders a touchable component', t => {
  t.is(component.find(TouchableHighlight).length, 1);
});

test('renders property image', t => {
  t.is(component.find(Image).length, 1);
});

test('renders price label', t => {
  t.true(component.contains(<Text style={styles.price}>£929,995</Text>));
});

test('click on current component', t => {
  component.simulate('press');
  t.true(onPressStub.calledOnce);
});

test.after(() =>{
  sinon.restore();
});