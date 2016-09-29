import test from 'ava';
import {updateSearchString, updateSearchResult} from '../../actions/propertySearchActions';
import propertyReducer from '../propertyReducer';

const initPropertySearchState = {request: {place_name: 'London'}};

test('should return origin state when actions is not handable', t => {
  const notHandableAction = {type: 'NotHand'};

  t.deepEqual(propertyReducer(undefined, notHandableAction), initPropertySearchState);
});

test('should handle search action', t => {
  const expect = {
    request: 'test'
  };
  const searchAction = updateSearchString('test');
  t.deepEqual(propertyReducer(undefined, searchAction), expect);
});


test('should handle updateSearchResults action', t => {
  const expect = {
    request: {place_name: 'London'},
    properties: 'test'
  };
  const searchAction = updateSearchResult('test');
  t.deepEqual(propertyReducer(undefined, searchAction), expect);
});