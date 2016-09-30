import {createAction} from 'redux-actions';
import {SAVE_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE} from './sharedActionTypes';

export const saveErrorMessage = createAction(SAVE_ERROR_MESSAGE);
export const clearErrorMessage = createAction(CLEAR_ERROR_MESSAGE);
