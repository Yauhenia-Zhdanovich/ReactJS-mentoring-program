import * as AppActions from '../actions/appActionsTypes.js';

const defaultState = {
  moviesList: [],
  loading: false
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
    case AppActions.FETCH_MOVIES_FAIL:
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
    default:
      return { ...state };
  }
}
