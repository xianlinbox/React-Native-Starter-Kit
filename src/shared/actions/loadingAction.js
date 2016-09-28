import {START_LAODING, END_LOADING} from './sharedActionTypes'
import {createAction} from 'redux-actions';

export const startLoading = createAction(START_LAODING);
export const endLoading = createAction(END_LOADING);
