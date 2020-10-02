import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import * as AppActions from '../actions/appActionsTypes.js';
import { fetchMoviesEffect } from './fetchMoviesEffect.js';
import { baseUrl } from '../../const/common.js';

const deleteMovie = id => {
  return axios.delete(`${baseUrl}/${id}`);
}

function* deleteMovieEffect(action) {
  try {
    yield call(deleteMovie, action.payload);
    yield put({ type: AppActions.DELETE_MOVIE_SUCCESS });
  } catch(error) {
    yield put({ type: AppActions.FETCH_MOVIES_FAIL, payload: error });
  }
}

export function* watchDeleteMovie() {
  yield takeEvery(AppActions.DELETE_MOVIE, deleteMovieEffect);
}

export function* watchDeleteSuccess() {
  yield takeEvery(AppActions.DELETE_MOVIE_SUCCESS, fetchMoviesEffect);
}
