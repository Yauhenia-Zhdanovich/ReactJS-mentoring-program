import React from 'react';
import styled from 'styled-components';

import Header from '../components/header.jsx';
import MovieList from './movieList.jsx';
import FilterDashboard from '../components/filterDashboard.jsx';
import Footer from '../components/footer.jsx';
import ErrorBoundary from './errorBoundaries.jsx';
import AddMovie from './addMovie.jsx';

class LandingPage extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };
  }

  onAddMovieModalStateChange = (isWindowOpen) => {
    this.setState({showModal: isWindowOpen});
  }

  render() {
    return (
      <ErrorBoundary>
        <AppRoot>
          <Header
            onAddMovieClick={this.onAddMovieModalStateChange}
          />
          <FilterDashboard />
          <ErrorBoundary>
            <MovieList />
          </ErrorBoundary>
          <Footer/>
          {
            this.state.showModal && 
            <AddMovie
              headerText="ADD MOVIE"
              movie={{}}
              showModalWindow={this.state.showModal}
              handleClose={this.onAddMovieModalStateChange}
            />
          }
        </AppRoot>
      </ErrorBoundary>  
    );
  }
}

const AppRoot = styled.div`
  color: #fff;
  font-size: 17px;
`;

export default LandingPage;
