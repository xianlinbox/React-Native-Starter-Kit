import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';


function initReducers() {
  const propertyReducer = require('../property/reducers/propertyReducer').default;
  const loadingReducer = require('../shared/reducers/loadingReducer').default;
  const errorReducer = require('../shared/reducers/errorReducer').default;

  return combineReducers({
    errorMessage: errorReducer,
    isLoading: loadingReducer,
    property: propertyReducer
  });
}

export default function configStore() {
  const enhancer = compose(
    global.reduxNativeDevTools ? global.reduxNativeDevTools() : noop => noop
  );

  const rootReducer = initReducers();

  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  const store = createStoreWithMiddleware(rootReducer, {}, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = initReducers();
      store.replaceReducer(nextRootReducer);
    });
  }
  return store
}
