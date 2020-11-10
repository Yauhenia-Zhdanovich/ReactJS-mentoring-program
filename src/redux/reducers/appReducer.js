import * as AppActions from '../actions/appActionsTypes.js';

const defaultState = {
  moviesList: [],
  loading: false,
  searchValue: '',
  sortByDate: '',
  sortByGenre: [],
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case AppActions.FETCH_MOVIES:
      return { ...state, loading: true };
    case AppActions.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        moviesList: action.payload,
        loading: false,
      };
    case AppActions.FETCH_MOVIE_FAIL:
      return { ...state, loading: false };
    case AppActions.DELETE_MOVIE:
      return { ...state, loading: true };
    case AppActions.DELETE_MOVIE_FAIL:
      return { ...state, loading: false };
    case AppActions.DELETE_MOVIE_SUCCESS:
      return { ...state, loading: false };
    case AppActions.UPDATE_MOVIE:
      return { ...state, loading: true };
    case AppActions.UPDATE_MOVIE_FAIL:
      return { ...state, loading: false };
    case AppActions.UPDATE_MOVIE_SUCCESS:
      return { ...state, loading: false };
    case AppActions.CHANGE_SEARCH_VALUE:
      return { ...state, searchValue: action.payload.search };
    case AppActions.CHANGE_SORT_BY_DATE:
      return { ...state, sortByDate: action.payload.sortOrder };
    case AppActions.CHANGE_SORT_BY_GENRE:
      return { ...state, sortByGenre: action.payload.filter.split(',') };
    default:
      return { ...state };
  }
}
