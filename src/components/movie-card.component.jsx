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
        <img src="" alt=""/>
        {
          isActiveMode &&
          <MovieOptionButton>
            <RedButton onClick={event => {onEditButtonCLick(event)}}>Edit</RedButton>
            <RedButton onClick={event => {onDeleteButtonClick(event)}}>Delete</RedButton> 
          </MovieOptionButton>
        }
      </MovieImageContainer>
      <MovieInfo>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <p>{movie.genre}</p>
      </MovieInfo>
    </MovieCardArticle>
  )
};

const MovieCardArticle = styled.article`
  height: 450px;
  border: 1px solid #fff;
  padding: 10px;
`;

const MovieImageContainer = styled.div`
  height: 80%;
`;

const MovieInfo = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const MovieOptionButton = styled.div`
 
  cursor: pointer;
  position: relative;
`;


MovieCard.propTypes =  {
  onItemEdit: PropTypes.func,
  onItemDelete: PropTypes.func,
  movie: PropTypes.shape(
    {
      title: PropTypes.string,
      genre: PropTypes.string,
      year: PropTypes.number,
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
