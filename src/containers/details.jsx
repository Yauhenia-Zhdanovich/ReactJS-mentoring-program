import React, { useState, useEffect }  from 'react';
import axios from 'axios';

import { Route, useHistory, useRouteMatch } from 'react-router-dom';

import FilterDashboard from '../components/filterDashboard.jsx';
import MovieList from './movieList.jsx';
import Footer from '../components/footer.jsx';
import MovieDetails from '../components/movieDetails.jsx';
import Loader from './loader.jsx';
import { baseUrl } from '../const/common.js';

const Details = () => {

  const [currentMovie, setCurrentMovie] = useState(null);

  let history = useHistory();
  let match = useRouteMatch();

  const onItemSelected = (item) => {
    setCurrentMovie(item);
    history.push(`${item.id}`)
  }

  useEffect(() => {

    if (match.params.id) {
      axios.get(`${baseUrl}/${match.params.id}`)
      .then(res => {
        setCurrentMovie(res.data)
      })
      .catch(() => {
        history.push(`/not-found`);
      });
    }
  }, []);

  return (
    <>
      <Route path={`${match.path}/:id`} component={Details}/>
      <MovieDetails
        movie={currentMovie}
      />
      <FilterDashboard />
      <MovieList
        onItemSelected={onItemSelected}
      />
      <Footer/>
      <Loader />
    </>
  );
};

export default Details;
