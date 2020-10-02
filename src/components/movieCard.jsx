import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { RedButton } from '../assets/shared-styles.js';

const MovieCard = ({
  onItemEdit,
  onItemDelete,
  movie,
  isActiveMode,
  onItemSelected,
}) => {

  const onEditButtonCLick = event => {
    event.stopPropagation();
    onItemEdit(movie.id);
  }
  
  const onDeleteButtonClick = event => {
    event.stopPropagation();
    onItemDelete(movie.id);
  }

  return (
    <MovieCardArticle onClick={() => {onItemSelected(movie)}}>
      <MovieImageContainer>
        <MovieImage src={movie.poster_path} alt=""/>
        {
          isActiveMode &&
          <MovieOptionButtons>
            <RedButton onClick={event => {onEditButtonCLick(event)}}>Edit</RedButton>
            <RedButton onClick={event => {onDeleteButtonClick(event)}}>Delete</RedButton> 
          </MovieOptionButtons>
        }
      </MovieImageContainer>
      <MovieInfo>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <p>{
          movie.genres.map(genre => (
            <span key={genre}>
              { genre }{' '}
            </span>
          ))
        }</p>
      </MovieInfo>
    </MovieCardArticle>
  )
};

const MovieCardArticle = styled.article`
  height: 450px;
  max-width: 300px;
  border: 1px solid #fff;
  padding: 10px;
`;

const MovieImageContainer = styled.div`
  height: 80%;
  position: relative;
  text-align: center;
`;

const MovieInfo = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const MovieOptionButtons = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
`;

const MovieImage = styled.img`
  height: 350px;
`;


MovieCard.propTypes =  {
  onItemEdit: PropTypes.func,
  onItemDelete: PropTypes.func,
  movie: PropTypes.shape(
    {
      title: PropTypes.string,
      genre: PropTypes.string,
      release_date: PropTypes.string,
      imageUrl: PropTypes.string,
      filmRating: PropTypes.number,
      description: PropTypes.string,
      duration: PropTypes.number,
      id: PropTypes.number,
    }
  ),
  isActiveMode: PropTypes.bool,
  onItemSelected: PropTypes.func,
};

export default React.memo(MovieCard);
