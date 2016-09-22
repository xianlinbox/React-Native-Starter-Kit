import test from 'ava';
import {SEARCH, CHECK_PROPERTY_DETAILS} from '../propertyActionTypes'
import {search, checkPropertyDetails} from '../propertyActions';

test('search action should set type & payload', t => {
  const searchAction = search('test');
  t.deepEqual(searchAction, {type: SEARCH, payload: 'test'});
});

test('checkPropertyDetails action should set type & payload', t => {
  const checkPropertyDetailsAction = checkPropertyDetails('test');
  t.deepEqual(checkPropertyDetailsAction, {type: CHECK_PROPERTY_DETAILS, payload: 'test'});
});