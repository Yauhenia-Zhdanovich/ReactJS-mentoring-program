import React from 'react';
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
    searchValue = ''
  }) => {
  let movies = sortByGenre === 'All'
    ? moviesMock
    : moviesMock.filter(movie => movie.genre === sortByGenre);

  movies = !searchValue
  ? movies
  : movies.filter(movie => {
    return movie.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())});

  sortByDate ? movies.sort((a, b) => a.year - b.year)
    : movies.sort((a, b) => b.year - a.year);

  let showEditModal = false;
  let showDeleteModal = false;

  const onItemEdit = (id) => {
    showEditModal = true;
  };

  const onItemDelete = (id) => {
    showDeleteModal = true;
  };

  const handleClose = () => {
    showEditModal = false;
    showDeleteModal = false;
  };

  return (
    <Main>
      <MoviesAmount>{movies.length} movies found</MoviesAmount>
      <MoviesContainer>
        {
          movies.map(movie => (
            <MovieCard
              title={movie.title}
              genre={movie.genre}
              key={movie.id}
              id={movie.id}
              year={movie.year}
              onItemDelete={onItemDelete}
              onItemEdit={onItemEdit}
            />
          ))
        }
      </MoviesContainer>
      {
        showEditModal && 
          <ModalWindow
          showModalWindow={showEditModal}
          handleClose={handleClose}
          headerText={'EDIT MOVIE'}
        >
          <p>Are you sure you want to delete this movie?</p>
        </ModalWindow>
      }
      {
        showDeleteModal && 
          <ModalWindow
          showModalWindow={showDeleteModal}
          handleClose={handleClose}
          headerText={'DELETE MOVIE'}
        >
          <AddMovie formValue={{}}/>
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
