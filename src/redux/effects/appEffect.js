import { all } from 'redux-saga/effects';

import { watchFetchMovies } from './fetchMoviesEffect.js';
import { watchDeleteMovie, watchDeleteSuccess } from './deleteMovieEffect.js';
import { watchUpdateMovie, watchUpdateSuccess } from './updateMovieEffect.js';
import { watchAddMovie, watchAddSuccess } from './addMovieEffect.js';
import { watchSearchChange } from './searchMovieEffect.js';
import { sortByDateChange } from './sortByDateEffect.js';
import { sortByGenreChange } from './sortByGenreEffect.js';

export default function* rootSaga() {
  yield all([
    watchFetchMovies(),
    watchDeleteMovie(),
    watchUpdateMovie(),
    watchUpdateSuccess(),
    watchDeleteSuccess(),
    watchAddMovie(),
    watchAddSuccess(),
    watchSearchChange(),
    sortByDateChange(),
    sortByGenreChange(),
  ]);
}
