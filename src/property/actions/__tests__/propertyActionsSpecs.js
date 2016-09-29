import test from 'ava';
import {CHECK_PROPERTY_DETAILS} from '../propertyActionTypes'
import {checkPropertyDetails} from '../propertyActions';

test('checkPropertyDetails action should set type & payload', t => {
  const checkPropertyDetailsAction = checkPropertyDetails('test');
  t.deepEqual(checkPropertyDetailsAction, {type: CHECK_PROPERTY_DETAILS, payload: 'test'});
});