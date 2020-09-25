import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { RedButton } from '../assets/shared-styles.js';

const MovieCard = (props) => {

  return (
    <MovieCardArticle>
      <MovieImageContainer>
        <img src="" alt=""/>
        <MovieOptionButton>
          <RedButton onClick={() => {props.onItemEdit(props.id)}}>Edit</RedButton>
          <RedButton onClick={() => {props.onItemDelete(props.id)}}>Delete</RedButton> 
        </MovieOptionButton>
        
      </MovieImageContainer>
      <MovieInfo>
        <h3>{props.title}</h3>
        <p>{props.year}</p>
        <p>{props.genre}</p>
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

const MovieOptionList = styled.div`
  z-index: 1000;
`;

MovieCard.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.number,
  id: PropTypes.number,
}

export default MovieCard;