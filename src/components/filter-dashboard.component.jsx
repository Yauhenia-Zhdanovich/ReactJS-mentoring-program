import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const genres = [
  {
    text: 'All',
    id: 1,
  },
  {
    text: 'Horror',
    id: 2,
  },
  {
    text: 'Crime',
    id: 3,
  },
  {
    text: 'Documentary',
    id: 4,
  },
  {
    text: 'Comedy',
    id: 5,
  },
];

const FilterDashboard = ({
  onGenreChanged,
  onReleseDateSortChanged,
  sortByDate = true,
  sortByGenre = 'All',
}) => 
  {
    return (
      <FilterBoard>
        <GenreList>
          {
            genres.map(genre => (
              <GenreItem key={genre.id}>
                <GenreButton onClick={() => onGenreChanged(genre.text)}>{genre.text}</GenreButton>
              </GenreItem>
            ))
          }
        </GenreList>
        <DateSorting>
          <p>Sort By</p>
          <GenreButton onClick={() => onReleseDateSortChanged(!sortByDate)}>
            Release Date
            {
              sortByDate
              ? <span>﹀</span>
              : <span>︿</span>
            }           
          </GenreButton>
        </DateSorting>
      </FilterBoard>
    )
  }

const FilterBoard = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

const GenreList = styled.ul`
  display: flex;
  align-items: center;
`;

const DateSorting = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const GenreItem = styled.li`
  padding: 20px;
  font-size: 20px;
`;

const GenreButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
`;

FilterDashboard.propTypes = {
  onGenreChanged: PropTypes.func,
  onReleseDateSortChanged: PropTypes.func,
  sortByDate: PropTypes.bool,
  sortByGenre: PropTypes.string,
}

export default FilterDashboard;