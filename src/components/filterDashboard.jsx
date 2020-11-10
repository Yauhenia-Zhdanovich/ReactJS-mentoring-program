import React, { useEffect } from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";

import { CHANGE_SORT_BY_DATE, CHANGE_SORT_BY_GENRE } from '../redux/actions/appActionsTypes.js';
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
  sortByDate,
  sortByGenre,
  startChangeSortByDate,
  startChangeSortByGenre,
}) => 
  {
    let history = useHistory();
    let location = useLocation();

    
    useEffect(() => {
      const params = new URLSearchParams(location.search);

      if (params.get('sortOrder')) {
        onReleseDateSortChanged(params.get('sortOrder'));
      }
    }, []);

    const onReleseDateSortChanged = params => {
      history.push(`?sortBy=release_date&sortOrder=${params || sortByDate === 'asc' ? 'desc' : 'asc'}`);
      startChangeSortByDate(sortByDate === 'asc' ? 'desc' : 'asc')
    }

    const onStartChangeSortByGenre = genre => {     
      let isGenreActive = sortByGenre.find(el => el === genre);
      let payload = isGenreActive ? sortByGenre.filter(el => el !== genre) : [...sortByGenre, genre];

      history.push(payload.length ? `?sortBy=genre&filter=${payload.join(',')}` : '/');

      startChangeSortByGenre(payload.filter(el => el));
    }

    return (
      <FilterBoard>
        <GenreList>
          {
            genres.map(genre => (
              <GenreItem key={genre.id}>
                <GenreButton
                  onClick={() => onStartChangeSortByGenre(genre.text)}
                  className={sortByGenre.find(el => el === genre.text) ? 'active' : 'frozen'}
                  >
                  {genre.text}
                </GenreButton>
              </GenreItem>
            ))
          }
        </GenreList>
        <DateSorting>
          <p>Sort By</p>
          <GenreButton onClick={() => onReleseDateSortChanged()}>
            Release Date
            {
              sortByDate === 'asc'
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
  font-size: 17px;
`;

const GenreButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

FilterDashboard.propTypes = {
  onGenreChanged: PropTypes.func,
  onReleseDateSortChanged: PropTypes.func,
};

const mapStateToProps = state => {
  const { sortByDate, sortByGenre } = state;

  return { sortByDate: sortByDate, sortByGenre: sortByGenre };
}

const changeSortByDate = sortByDate => ({
  type: CHANGE_SORT_BY_DATE,
  payload: { sortBy: 'release_date', sortOrder: sortByDate },
});

const changeSortByGenre = sortByGenre => ({
  type: CHANGE_SORT_BY_GENRE,
  payload: { sortBy: 'genres', filter: sortByGenre.join(',') },
});

const mapDispatchToProps = dispatch => {
  return {
    startChangeSortByDate: sortByDate => dispatch(changeSortByDate(sortByDate)),
    startChangeSortByGenre: sortByGenre => dispatch(changeSortByGenre(sortByGenre)),
  }
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(FilterDashboard));
