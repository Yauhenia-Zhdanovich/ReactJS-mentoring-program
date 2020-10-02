import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import ModalWindow from '../components/modalWindow.jsx';
import { ADD_MOVIE, UPDATE_MOVIE } from '../redux/actions/appActionsTypes.js';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.onWindowClose = this.onWindowClose.bind(this);

    this.state = {
      formValue: {},
    }
  }

  componentDidMount() {
    if (this.props.id) {
      const editedMovie = this.props.moviesList.find(movie => movie.id === this.props.id);

      this.setState(() => {
        return { formValue: editedMovie };
      })
    } 
  }

  onTitleChange = value => {
    this.setState({ formValue : { ...this.state.formValue, title: value }});
  }

  onReleaseDateChange = value => {
    this.setState({ formValue : { ...this.state.formValue, release_date: value }});

  }

  onMovieUrlChange = value => {
    this.setState({ formValue : { ...this.state.formValue, poster_path: value }});

  }

  onGenreChange = value => {
    this.setState({ formValue : { ...this.state.formValue, genres: value }});

  }

  onOverviewChange = value => {
    this.setState({ formValue : { ...this.state.formValue, overview: value }});

  }

  onRuntime = value => {
    this.setState({ formValue : { ...this.state.formValue, runtime: value }});
  }

  onWindowClose (result) {
    if (result) {
      if (this.props.id) {
        this.props.updateMovie(this.state.formValue)
      } else {
        this.props.addMovie(
          {
            ...this.state.formValue,
            genres: [this.state.formValue.genres],
            runtime: Number(this.state.formValue.runtime)
          }
        );
      }
    }
    this.props.handleClose();
  }

  render() {
    return (
      <ModalWindow
        showModalWindow={this.props.showModalWindow}
        handleClose={this.onWindowClose}
        headerText={'EDIT MOVIE'}
      >
        <Form>
          <InputFieldContainer>
            <label htmlFor="title">title</label>
            <input
              type="text"
              value={this.state.formValue.title}
              onChange={event => this.onTitleChange(event.target.value)}
              id="title"/>  
          </InputFieldContainer>
          <InputFieldContainer>
            <label htmlFor="releaseDate">release date</label>
            <input
              type="date"
              value={this.state.formValue.release_date}
              onChange={event => this.onReleaseDateChange(event.target.value)}
              id="releaseDate"/>  
          </InputFieldContainer>
          <InputFieldContainer>
            <label htmlFor="poster_path">movie URL</label>
            <input
              type="text"
              value={this.state.formValue.poster_path}
              onChange={event => this.onMovieUrlChange(event.target.value)}
              id="poster_path"/>  
          </InputFieldContainer>
          <InputFieldContainer>
            <label htmlFor="genre">genre</label>
            <input
              type="text"
              value={this.state.formValue.genre}
              onChange={event => this.onGenreChange(event.target.value)}
              id="genre"/>  
          </InputFieldContainer>
          <InputFieldContainer>
            <label htmlFor="overview">overview</label>
            <input
              type="textarea"
              value={this.state.formValue.overview}
              onChange={event => this.onOverviewChange(event.target.value)}
              id="overview"/>  
          </InputFieldContainer>
          <InputFieldContainer>
            <label htmlFor="runtime">runtime</label>
            <input
              type="number"
              value={this.state.formValue.runtime}
              onChange={event => this.onRuntime(event.target.value)}
              id="runtime"/>  
          </InputFieldContainer>
        </Form>
      </ModalWindow>
    )
  }
}

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: space-evenly;
`;

const mapStateToProps = state => {
  const { moviesList } = state;

  return { moviesList: moviesList };
}

const startMovieUpdate = movie => ({
  type: UPDATE_MOVIE,
  payload: movie,
});

const startAddMovie = movie => ({
  type: ADD_MOVIE,
  payload: movie,
});

const mapDispatchToProps = dispatch => {
  return {
    updateMovie: movie => dispatch(startMovieUpdate(movie)),
    addMovie: movie => dispatch(startAddMovie(movie)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
