import propertyReducer from '../property/reducers/propertyReducer';
import {createStore, compose} from 'redux';

const initialState = {
  searchString: 'london',
  properties: [],
  currentProperty: {}
};

const enhancer = compose(
  global.reduxNativeDevTools ? global.reduxNativeDevTools() : noop => noop
);

const store = createStore(propertyReducer, initialState, enhancer);
module.exports = store;
