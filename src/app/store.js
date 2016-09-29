import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import propertyReducer from '../property/reducers/propertyReducer';
import loadingReducer from '../shared/reducers/loadingReducer';
import errorReducer from '../shared/reducers/errorReducer';


const enhancer = compose(
  global.reduxNativeDevTools ? global.reduxNativeDevTools() : noop => noop
);

const rootReducer = combineReducers({
  errorReducer,
  loadingReducer,
  propertyReducer
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, {}, enhancer);
module.exports = store;
