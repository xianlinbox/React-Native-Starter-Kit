import test from 'ava';
import {search, checkPropertyDetails} from '../../actions/propertyActions';
import propertyReducer from '../propertyReducer';

test('should return origin state when actions is not handable', t => {
  const expect = {
    searchRequest: {},
    properties: [],
    currentProperty: {}
  };
  const notHandableAction = {type: 'NotHand'};
  t.deepEqual(propertyReducer(undefined, notHandableAction), expect);
});

test('should handle search action', t => {
  const expect = {
    searchRequest: 'test',
    properties: [],
    currentProperty: {}
  };
  const searchAction = search('test');
  t.deepEqual(propertyReducer(undefined, searchAction), expect);
});


test('should handle checkPropertyDetails action', t => {
  const expect = {
    searchRequest: {},
    properties: [],
    currentProperty: 'test'
  };
  const searchAction = checkPropertyDetails('test');
  t.deepEqual(propertyReducer(undefined, searchAction), expect);
});