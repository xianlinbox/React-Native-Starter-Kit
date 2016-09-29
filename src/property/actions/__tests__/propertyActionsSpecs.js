import test from 'ava';
import proxyquire from 'proxyquire';
import {SELECT_PROPERTY} from '../propertyActionTypes'

var propertyActions;

test.before(() =>{
  proxyquire.noCallThru();
  propertyActions = proxyquire('../propertyActions', {
    'react-native-router-flux': {Actions: {}}
  });
});

test('selectProperty action should set type & payload', t => {
  t.deepEqual(propertyActions.selectProperty('test'), {type: SELECT_PROPERTY, payload: 'test'});
});