import React from 'react';
import styled from 'styled-components';

const MovieDetails = ({movie}) => {
  return (
    <>
    <DetailsHeader>
      <p>netflix roulette</p>
      <div>🔎</div>
    </DetailsHeader>
    {
      movie ?
      <MovieDetailsContainer>
        <MovieImageContainer>
          <img src="" alt=""/>
        </MovieImageContainer>
        <div>
          <MovieTitleContainer>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieRating>{movie.filmRating}</MovieRating>
          </MovieTitleContainer>
          <h4>{movie.genre}</h4>
          <MovieDurationContainer>
            <TimeItem>{movie.year}</TimeItem>
            <TimeItem>{movie.duration} min</TimeItem>
          </MovieDurationContainer>
          <MovieDescription>
            {movie.description}
          </MovieDescription>
        </div>
      </MovieDetailsContainer>
      :
      <NoMovie>
        Select movie
      </NoMovie>
    }
    </>
   
  )
};

const MovieDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

const DetailsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding-top: 40px;
  margin: 0 auto;
`;

const NoMovie = styled.div`
  height: 100px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`;

const MovieImageContainer = styled.div`
  min-width: 200px;
  height: 300px;
  background: #9C9696;
  margin: 40px;
`;

const MovieTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 20px;
`;

const MovieRating = styled.div`
  width: 60px;
  height: 60px;
  font-size: 25px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 50%;
  color: #009661;
`;

const MovieTitle = styled.h2`
  padding-right: 40px;
  font-size: 25px;
  line-height: 40px;
  align-self: center;
`;

const MovieDurationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const TimeItem = styled.div`
  padding: 10px 10px 10px 0;
`;

const MovieDescription = styled.p`
  max-width: 1200px;
  padding-top: 10px;
`;

export default React.memo(MovieDetails);
