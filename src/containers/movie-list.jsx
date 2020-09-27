import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MovieCard from '../components/movie-card.component.jsx';
import ModalWindow from '../components/modal-window.component.jsx';
import AddMovie from './add-movie.component.jsx';

import moviesMock from '../assets/movies.mock';

const MovieList = (
  {
    sortByDate = true,
    sortByGenre = 'All',
    searchValue = '',
    onItemSelected
  }) => {

  const [movieList, setMovieList] = useState(moviesMock);
  const [isShowDeleteWindow, onDeleteWindowVisibitityChange] = useState(false);
  const [isShowEditWindow, onEditWindowVisibilityChange] = useState(false);
  const [activeMovieId, setMovieId] = useState(null);

  useEffect(() => {
    let movies = movieList.sort((a,b) => sortByDate ? a.year - b.year : b.year - a.year);
    setMovieList(movies);
  }, [sortByDate]);

  // search and sort by genre do not work correctly
  // will be fixed after wiring up BE
  useEffect(() => {
    let movies = !searchValue
      ? movieList
      : movieList.filter(movie => {
        return movie.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    });

    setMovieList(movies);
  }, [searchValue]);

  useEffect(() => {
    let movies = sortByGenre === 'All'
      ? movieList
      : movieList.filter(movie => movie.genre === sortByGenre);

    setMovieList(movies);
  }, [sortByGenre]);

  const deleteMovieHandler = useCallback((id) => {
    setMovieId(id);
    onDeleteWindowVisibitityChange(true);
  });

  const editMovieHandler = useCallback((id) => {
    setMovieId(id);
    onEditWindowVisibilityChange(true);
  });

  const onCloseDeleteWindow = (result) => {
    if (result) {
      let updatedMovieList = movieList.filter(movie => movie.id !== activeMovieId);
      setMovieId(null);
      setMovieList(updatedMovieList);
    }
    onDeleteWindowVisibitityChange(false);
  };

  const onCLoseEditWindow = (result) => {
    onEditWindowVisibilityChange(false);
  }

  return (
    <Main>
      <MoviesAmount>{movieList.length} movies found</MoviesAmount>
      <MoviesContainer>
        {
          movieList.map(movie => (
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
          <ModalWindow
            showModalWindow={isShowEditWindow}
            handleClose={onEditWindowVisibilityChange}
            headerText={'EDIT MOVIE'}
          >
          <AddMovie formValue={{}}/>
        </ModalWindow>
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

export default MovieList;
