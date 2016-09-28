import test from 'ava';
import {search, checkPropertyDetails} from '../../actions/propertyActions';
import propertyReducer from '../propertyReducer';

test('should return origin state when actions is not handable', t => {
  const notHandableAction = {type: 'NotHand'};
  t.deepEqual(propertyReducer(undefined, notHandableAction), {});
});

test('should handle search action', t => {
  const expect = {
    request: 'test'
  };
  const searchAction = search('test');
  t.deepEqual(propertyReducer(undefined, searchAction), expect);
});


test('should handle checkPropertyDetails action', t => {
  const expect = {
    currentProperty: 'test'
  };
  const searchAction = checkPropertyDetails('test');
  t.deepEqual(propertyReducer(undefined, searchAction), expect);
});