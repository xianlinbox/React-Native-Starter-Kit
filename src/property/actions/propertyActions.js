import {SEARCH, SAVE_PROPERTIES, SELECT_PROPERTY} from './propertyActionTypes'
import { createAction } from 'redux-actions';

export const selectProperty = createAction(SELECT_PROPERTY);
