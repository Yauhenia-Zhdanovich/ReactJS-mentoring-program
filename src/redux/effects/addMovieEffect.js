import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import * as AppActions from '../actions/appActionsTypes.js';
import { fetchMoviesEffect } from './fetchMoviesEffect.js';
import { baseUrl } from '../../const/common.js';

const addMovie = movie => axios.post(baseUrl, movie);

function* addMovieEffect(action) {
  try {
    yield call(addMovie, action.payload);

    yield put({ type: AppActions.ADD_MOVIE_SUCCESS });
  } catch (error) {
    yield put({ type: AppActions.ADD_MOVIE_FAIL, payload: error });
  }
}

export function* watchAddMovie() {
  yield takeLatest(AppActions.ADD_MOVIE, addMovieEffect);
}

export function* watchAddSuccess() {
  yield takeLatest(AppActions.ADD_MOVIE_SUCCESS, fetchMoviesEffect);
}
