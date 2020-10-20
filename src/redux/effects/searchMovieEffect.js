import { takeLatest } from 'redux-saga/effects';

import * as AppActions from '../actions/appActionsTypes.js';

import { fetchMoviesEffect } from './fetchMoviesEffect.js';


export function* watchSearchChange() {
  yield takeLatest(AppActions.CHANGE_SEARCH_VALUE, fetchMoviesEffect);
}