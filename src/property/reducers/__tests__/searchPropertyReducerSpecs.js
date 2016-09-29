import test from 'ava';
import proxyquire from 'proxyquire';
import searchPropertyReducer from '../searchPropertyReducer';

const initPropertySearchState = {request: {place_name: 'London'}};

var propertyActions;
test.before(() => {
  proxyquire.noCallThru();
  propertyActions = proxyquire('../../actions/propertyActions', {
    'react-native-router-flux': {Actions: {}}
  });
});


test('should return origin state for unhandleable action', t => {
  const notHandableAction = {type: 'NotHandled'};
  t.deepEqual(searchPropertyReducer(undefined, notHandableAction), initPropertySearchState);
});

test('should handle updateSearchString action', t => {
  const expect = {request: 'test'};

  t.deepEqual(searchPropertyReducer(undefined, propertyActions.updateSearchString('test')), expect);
});

test('should handle updateSearchResults action', t => {
  const expect = {request: {place_name: 'London'}, properties: 'test'};
  t.deepEqual(searchPropertyReducer(undefined, propertyActions.updateSearchResult('test')), expect);
});