import React from 'react';
import MovieCard from '../components/movie-card.component.jsx';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
              year={movie.year}
            />
          ))
        }
      </MoviesContainer>
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
