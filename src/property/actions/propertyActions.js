import {SEARCH, SAVE_PROPERTIES, CHECK_PROPERTY_DETAILS} from './propertyActionTypes'
import { createAction } from 'redux-actions';

export const checkPropertyDetails = createAction(CHECK_PROPERTY_DETAILS);
