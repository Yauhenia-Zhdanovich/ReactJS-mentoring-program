import React, { useState }  from 'react';

import FilterDashboard from '../components/filter-dashboard.component.jsx';
import MovieList from './movie-list.jsx';
import Footer from '../components/footer.component.jsx';
import MovieDetails from '../components/movie-details.component.jsx'

const Details = () => {

  const [sortByDate, setSortByDate] = useState(false);
  const [sortByGenre, setSortByGenre] = useState('All');
  const [currentMovie, setCurrentMovie] = useState(null);

  const onItemSelected = (item) => {
    setCurrentMovie(item);
  }

  return (
    <>
      <MovieDetails
        movie={currentMovie}
      />
      <FilterDashboard
        onGenreChanged={setSortByGenre}
        onReleseDateSortChanged={setSortByDate}
        sortByDate={sortByDate}
        sortByGenre={sortByGenre}
      />
      <MovieList
        sortByDate={sortByDate}
        sortByGenre={sortByGenre}
        searchValue={''}
        onItemSelected={onItemSelected}
      />
      <Footer/>
    </>
  );
}

export default Details;
