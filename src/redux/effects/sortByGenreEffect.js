import { takeLatest } from 'redux-saga/effects';

import * as AppActions from '../actions/appActionsTypes.js';

import { fetchMoviesEffect } from './fetchMoviesEffect.js';


export function* sortByGenreChange() {
  yield takeLatest(AppActions.CHANGE_SORT_BY_GENRE, fetchMoviesEffect);
}