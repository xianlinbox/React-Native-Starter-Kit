import {createAction} from 'redux-actions';
import {START_LAODING, END_LOADING} from './sharedActionTypes';

export const startLoading = createAction(START_LAODING);
export const endLoading = createAction(END_LOADING);
