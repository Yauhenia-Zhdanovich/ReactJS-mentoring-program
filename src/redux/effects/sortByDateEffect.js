import { takeLatest } from 'redux-saga/effects';

import * as AppActions from '../actions/appActionsTypes.js';

import { fetchMoviesEffect } from './fetchMoviesEffect.js';


export function* sortByDateChange() {
  yield takeLatest(AppActions.CHANGE_SORT_BY_DATE, fetchMoviesEffect);
}