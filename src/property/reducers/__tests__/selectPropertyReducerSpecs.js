import test from 'ava';
import proxyquire from 'proxyquire';
import selectPropertyReducer from '../selectPropertyReducer';

test('should return origin state for unhandleable action', t => {
  const notHandableAction = {type: 'NotHandled'};
  t.deepEqual(selectPropertyReducer(undefined, notHandableAction), -1);
});

test('should handle selectProperty action', t => {
  proxyquire.noCallThru();
  const {selectProperty} = proxyquire('../../actions/propertyActions', {
    'react-native-router-flux': {Actions: {}}
  });

  t.deepEqual(selectPropertyReducer(undefined, selectProperty(1)), 1);
});