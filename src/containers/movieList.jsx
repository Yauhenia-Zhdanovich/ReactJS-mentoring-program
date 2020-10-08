import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import MovieCard from '../components/movieCard.jsx';
import ModalWindow from '../components/modalWindow.jsx';
import AddMovie from './addMovie.jsx';
import { FETCH_MOVIES, DELETE_MOVIE } from '../redux/actions/appActionsTypes.js';

const MovieList = (
  {
    sortByDate = true,
    sortByGenre = 'All',
    searchValue = '',
    onItemSelected,
    fetchMovies,
    deleteMovie,
    moviesList
  }) => {

  const [isShowDeleteWindow, onDeleteWindowVisibitityChange] = useState(false);
  const [isShowEditWindow, onEditWindowVisibilityChange] = useState(false);
  const [activeCurrentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    fetchMovies({
      sortBy: 'release_date',
      sortOrder: sortByDate ? 'asc': 'desc',
    });
  }, [sortByDate]);

  useEffect(() => {
    fetchMovies({
      search: searchValue,
      searchBy: 'title',
    });
  }, [searchValue]);

  useEffect(() => {
    let sortBy = '';
    if (sortByGenre !== 'All') {
      sortBy = sortByGenre;
    }
    fetchMovies({
      filter: sortBy,
    });
  }, [sortByGenre]);

  useEffect(() => {
    fetchMovies();
   }, []);

  const deleteMovieHandler = useCallback((id) => {
    const currentMovie = moviesList.find(movie => movie.id === id);
    setCurrentMovie(currentMovie);
    onDeleteWindowVisibitityChange(true);
  });

  const editMovieHandler = useCallback((id) => {
    const currentMovie = moviesList.find(movie => movie.id === id);
    setCurrentMovie(currentMovie);
    onEditWindowVisibilityChange(true);
  });

  const onCloseDeleteWindow = (result) => {
    if (result) {
      deleteMovie(activeCurrentMovie.id);
      setCurrentMovie(null);
    }
    onDeleteWindowVisibitityChange(false);
  };

  return (
    <Main>
      <MoviesAmount>{moviesList.length} movies found</MoviesAmount>
      <MoviesContainer>
        {
          moviesList.map(movie => (
            <MovieCard
              movie={movie}
              key={movie.id}
              onItemDelete={deleteMovieHandler}
              onItemEdit={editMovieHandler}
              onItemSelected={onItemSelected}
              isActiveMode={true}
            />
          ))
        }
      </MoviesContainer>
      {
        isShowEditWindow && 
          <AddMovie
            movie={activeCurrentMovie}
            showModalWindow={isShowEditWindow}
            handleClose={onEditWindowVisibilityChange}
            headerText="EDIT MOVIE"
          />
      }
      {
        isShowDeleteWindow && 
          <ModalWindow
            showModalWindow={isShowDeleteWindow}
            handleClose={onCloseDeleteWindow}
            headerText={'DELETE MOVIE'}
          > 
          <p>Are you sure you want to delete this movie?</p>
        </ModalWindow>
      }
    </Main>
  )
}

const MoviesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  background-color: #424242;
`;

const MoviesAmount = styled.section`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Main = styled.main`
  width: 80%;
  margin: 0 auto;
`;

MovieList.propTypes = {
  sortByDate: PropTypes.bool,
  sortByGenre: PropTypes.string,
  searchValue: PropTypes.string,
};

const mapStateToProps = state => {
  const { moviesList } = state;

  return { moviesList: moviesList };
}

const startFetchMovies = params => ({
  type: FETCH_MOVIES,
  payload: params,
});

const requestMovieDelete = id => ({
  type: DELETE_MOVIE,
  payload: id,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: params => dispatch(startFetchMovies(params)),
    deleteMovie: id => dispatch(requestMovieDelete(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
