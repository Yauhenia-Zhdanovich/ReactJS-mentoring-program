import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onReleaseDateChange = this.onReleaseDateChange.bind(this);
    this.onMovieUrlChange = this.onMovieUrlChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onOverviewChange = this.onOverviewChange.bind(this);
    this.onRuntime = this.onRuntime.bind(this);

    this.state = {
      formValue: props.formValue
    }
  }

  onTitleChange(value) {
    this.setState({ formValue : { title: value }});
  }

  onReleaseDateChange(value) {
    this.setState({ formValue : { releaseDate: value }});

  }

  onMovieUrlChange(value) {
    this.setState({ formValue : { movieUrl: value }});

  }

  onGenreChange(value) {
    this.setState({ formValue : { genre: value }});

  }

  onOverviewChange(value) {
    this.setState({ formValue : { overview: value }});

  }

  onRuntime(value) {
    this.setState({ formValue : { runtime: value }});
  }

  render() {
    return (
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
            value={this.state.formValue.releaseDate}
            onChange={event => this.onReleaseDateChange(event.target.value)}
            id="releaseDate"/>  
        </InputFieldContainer>
        <InputFieldContainer>
          <label htmlFor="movieUrl">movie URL</label>
          <input
            type="text"
            value={this.state.formValue.movieUrl}
            onChange={event => this.onMovieUrlChange(event.target.value)}
            id="movieUrl"/>  
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
            type="text"
            value={this.state.formValue.runtime}
            onChange={event => this.onRuntime(event.target.value)}
            id="runtime"/>  
        </InputFieldContainer>
      </Form>
      
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

export default AddMovie;
