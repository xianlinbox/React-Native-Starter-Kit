import {combineReducers} from 'redux';
import navigationReducer from './navigationReducer';

const appReducer = combineReducers({
  navigationReducer
});
export default appReducer;
