import propertyReducer from '../property/reducers/propertyReducer';
import {createStore} from 'redux';

const initialState = {
  searchString: 'london',
  properties: [],
  currentProperty: {}
};

module.exports = createStore(propertyReducer, initialState);
