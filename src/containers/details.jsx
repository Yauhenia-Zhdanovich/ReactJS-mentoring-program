import React, { useState }  from 'react';


import FilterDashboard from '../components/filterDashboard.jsx';
import MovieList from './movieList.jsx';
import Footer from '../components/footer.jsx';
import MovieDetails from '../components/movieDetails.jsx';
import Loader from './loader.jsx';

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
      <Loader />
    </>
  );
};

export default Details;
