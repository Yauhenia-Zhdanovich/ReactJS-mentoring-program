import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import * as AppActions from '../actions/appActionsTypes.js';
import { baseUrl } from '../../const/common.js';


const fetchMovies = params => axios.get(baseUrl, { params: params });

export function* fetchMoviesEffect(action) {
  try {
    const movies = yield call(fetchMovies, action.payload);

    yield put({ type: AppActions.FETCH_MOVIES_SUCCESS, payload: movies.data.data });
  } catch (error) {
    yield put({ type: AppActions.FETCH_MOVIES_FAIL, payload: error });
  }
}

export function* watchFetchMovies() {
  yield takeLatest(AppActions.FETCH_MOVIES, fetchMoviesEffect);
}
