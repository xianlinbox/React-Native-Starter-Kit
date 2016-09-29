import test from 'ava';
import {SELECT_PROPERTY} from '../propertyActionTypes'
import {selectProperty} from '../propertyActions';

test('selectProperty action should set type & payload', t => {
  const checkPropertyDetailsAction = selectProperty('test');
  t.deepEqual(checkPropertyDetailsAction, {type: SELECT_PROPERTY, payload: 'test'});
});