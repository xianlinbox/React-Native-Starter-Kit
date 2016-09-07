import {createStore} from 'redux';
import appReducer from './appReducer';

function initStore(initialState) {
  return createStore(appReducer, initialState);
}

module.exports = initStore;