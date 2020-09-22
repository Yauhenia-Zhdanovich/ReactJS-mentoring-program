import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  return (
    <MovieCardArticle>
      <MovieImageContainer>
        <img src="" alt=""/>
        <div>...</div>
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

MovieCard.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.number,
}

export default MovieCard;