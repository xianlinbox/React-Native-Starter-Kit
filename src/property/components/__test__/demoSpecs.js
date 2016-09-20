import test from 'ava';
import React, {View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import {shallow} from 'enzyme';
import MyComponent from '../demo';

test('should render stuff', t => {
  const wrapper = shallow(<MyComponent />);
  t.is(wrapper.length, 1);
  t.is(wrapper.find(View).length, 1);
  t.is(wrapper.find(TouchableHighlight).length, 1);
  t.true(wrapper.contains(<Text>I wonder if there will be any problems...</Text>));
});