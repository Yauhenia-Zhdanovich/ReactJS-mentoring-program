import * as AppActions from '../actions/appActionsTypes.js';
import appReducer from './appReducer.js';

const defaultStateMock = {
  moviesList: [],
  loading: false,
  searchValue: '',
  sortByDate: '',
  sortByGenre: [],
};

describe('appReducer', () => {
  it('should return the initial state', () => {
    expect(appReducer(undefined, {}))
    .toEqual(defaultStateMock)
  });

  it('should update genre', () => {
    expect(appReducer(defaultStateMock, {
        type: AppActions.CHANGE_SORT_BY_GENRE,
        payload: {
          sortBy: 'genres',
          filter: 'Drama,Thriller',
        }
      }) 
    ).toEqual({ ...defaultStateMock, sortByGenre: ['Drama', 'Thriller'] });
  });

  it('should update sort by date', () => {
    expect(appReducer(defaultStateMock, {
        type: AppActions.CHANGE_SORT_BY_DATE,
        payload: { sortBy: 'release_date', sortOrder: 'asc' }
      }) 
    ).toEqual({ ...defaultStateMock, sortByDate: 'asc' });
  });

  it('should update search value', () => {
    expect(appReducer(defaultStateMock, {
        type: AppActions.CHANGE_SEARCH_VALUE,
        payload: { search: 'kill bill', searchBy: 'title' }
      }) 
    ).toEqual({ ...defaultStateMock, searchValue: 'kill bill' });
  });

  it('should start loading on fetch start', () => {
    expect(appReducer(defaultStateMock, {
        type: AppActions.FETCH_MOVIES,
      }) 
    ).toEqual({ ...defaultStateMock, loading: true });
  });

  it('should add movies and finish loading on fetch success', () => {
    expect(appReducer(defaultStateMock, {
        type: AppActions.FETCH_MOVIES_SUCCESS,
        payload: [{ movieName: 'kill bill' }],
      }) 
    ).toEqual({ ...defaultStateMock, loading: false, moviesList: [{ movieName: 'kill bill' }]});
  });

  it('should finish loading on fetch fail', () => {
    expect(appReducer(defaultStateMock, {
        type: AppActions.FETCH_MOVIE_FAIL,
      }) 
    ).toEqual({ ...defaultStateMock, loading: false});
  });

  it('should start loading on start delete movie', () => {
    expect(appReducer(defaultStateMock, {
        type: AppActions.DELETE_MOVIE,
      }) 
    ).toEqual({ ...defaultStateMock, loading: true});
  });

  it('should finish loading on delete movie fail', () => {
    expect(appReducer(defaultStateMock, {
        type: AppActions.DELETE_MOVIE_FAIL,
      }) 
    ).toEqual({ ...defaultStateMock, loading: false});
  });

  it('should finish loading on delete movie success', () => {
    expect(appReducer(defaultStateMock, {
        type: AppActions.DELETE_MOVIE_SUCCESS,
      }) 
    ).toEqual({ ...defaultStateMock, loading: false});
  });
});
