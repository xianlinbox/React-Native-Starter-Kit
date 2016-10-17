import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {reducer as formReducer} from 'redux-form';

function initReducers() {
  const propertyReducer = require('../property/reducers/propertyReducer').default;
  const loadingReducer = require('../shared/reducers/loadingReducer').default;
  const errorReducer = require('../shared/reducers/errorReducer').default;

  return combineReducers({
    errorMessage: errorReducer,
    isLoading: loadingReducer,
    property: propertyReducer,
    forms: formReducer,
  });
}

const logger = createLogger();

export default function configStore() {
  const enhancer = compose(
    global.reduxNativeDevTools ? global.reduxNativeDevTools() : noop => noop
  );

  const rootReducer = initReducers();

  const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
  const store = createStoreWithMiddleware(rootReducer, {}, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = initReducers();
      store.replaceReducer(nextRootReducer);
    });
  }
  return store
}
