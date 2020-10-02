import { all } from 'redux-saga/effects';

import { watchFetchMovies } from './fetchMoviesEffect.js';
import { watchDeleteMovie, watchDeleteSuccess } from './deleteMovieEffect.js';
import { watchUpdateMovie, watchUpdateSuccess } from './updateMovieEffect.js';
import { watchAddMovie, watchAddSuccess } from './addMovieEffect.js';

export default function* rootSaga() {
  yield all([
    watchFetchMovies(),
    watchDeleteMovie(),
    watchUpdateMovie(),
    watchUpdateSuccess(),
    watchDeleteSuccess(),
    watchAddMovie(),
    watchAddSuccess()
  ]);
}
