import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as AppActions from '../actions/appActionsTypes.js';
import { fetchMoviesEffect } from './fetchMoviesEffect.js';
import { baseUrl } from '../../const/common.js';

const updateMovie = movie => {
  return axios.put(baseUrl, movie);
}

function* updateMovieEffect(action) {
  try {
    yield call(updateMovie, action.payload);
    yield put({ type: AppActions.UPDATE_MOVIE_SUCCESS });
  } catch(error) {
    yield put({ type: AppActions.UPDATE_MOVIE_FAIL });
  }
}

export function* watchUpdateMovie() {
  yield takeEvery(AppActions.UPDATE_MOVIE, updateMovieEffect);
}

export function* watchUpdateSuccess() {
  yield takeEvery(AppActions.UPDATE_MOVIE_SUCCESS, fetchMoviesEffect);
}
