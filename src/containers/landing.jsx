import React from 'react';
import styled from 'styled-components';

import Header from '../components/header.component.jsx';
import MovieList from './movie-list.jsx';
import FilterDashboard from '../components/filter-dashboard.component.jsx';
import Footer from '../components/footer.component.jsx';
import ErrorBoundary from './error-boundaries.cimponent.jsx';
import ModalWindow from '../components/modal-window.component.jsx';
import AddMovie from './add-movie.component.jsx';

class LandingPage extends React.Component {
  constructor() {
    super();

    this.onGenreChanged = this.onGenreChanged.bind(this);
    this.onSortByDateChanged = this.onSortByDateChanged.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.onAddMovieModalStateChange = this.onAddMovieModalStateChange.bind(this);
    this.state = {
      sortByGenre: 'All',
      sortByDate: true,
      searchValue: '',
      showModal: false,
    };
  }

  onGenreChanged(genre) {
    this.setState({
      sortByGenre: genre
    });
  }

  onSortByDateChanged(sortType) {
    this.setState({sortByDate: sortType});
  }

  onSearchInputChange(newSearchValue) {
    this.setState({searchValue: newSearchValue});
  }

  onAddMovieModalStateChange(isWindowOpen) {
    this.setState({showModal: isWindowOpen});
  }

  render() {
    return (
      <ErrorBoundary>
        <AppRoot>
          <Header
            onSearchInputChange={this.onSearchInputChange}
            onAddMovieClick={this.onAddMovieModalStateChange}
          />
          <FilterDashboard
            onGenreChanged={this.onGenreChanged}
            onReleseDateSortChanged={this.onSortByDateChanged}
            sortByDate={this.state.sortByDate}
            sortByGenre={this.state.sortByGenre}
          />
          <ErrorBoundary>
            <MovieList
              sortByDate={this.state.sortByDate}
              sortByGenre={this.state.sortByGenre}
              searchValue={this.state.searchValue}
            />
          </ErrorBoundary>
          <Footer/>
          {
            this.state.showModal && 
              <ModalWindow
              showModalWindow={this.state.showModal}
              handleClose={this.onAddMovieModalStateChange}
              headerText={'ADD MOVIE'}
            >
              <AddMovie formValue={{}}/>             
            </ModalWindow>
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