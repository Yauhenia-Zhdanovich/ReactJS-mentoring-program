import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import ModalWindow from '../components/modalWindow.jsx';
import { ADD_MOVIE, UPDATE_MOVIE } from '../redux/actions/appActionsTypes.js';

const AddMovie = (props) => {

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      title: props.movie.title || '',
      release_date: props.movie.release_date || '2020-12-10',
      poster_path: props.movie.poster_path || '',
      overview: props.movie.overview || '',
      runtime: props.movie.runtime || 0,
      genres: props.movie.genres && props.movie.genres.join(', ') || '',
    },
    onSubmit: values => {
      const genres = values.genres.split(', ');
      const runtime = Number(values.runtime);

      if (props.movie.id) {
        props.updateMovie({
          ...values,
          id: props.movie.id,
          genres: genres,
          runtime: runtime,
        });
      } else {
        props.addMovie(
          {
            ...values,
            genres: genres,
            runtime: runtime,
          }
        );
      }
    },
  });

  const onWindowClose = (result) => {
    if (result) {
      if (!formik.isValid) {
        return;
      }
      formik.handleSubmit();  
    }
    props.handleClose();
  }

  return (
    <ModalWindow
      showModalWindow={props.showModalWindow}
      handleClose={onWindowClose}
      headerText={props.headerText}
    >
      <Form>
        <InputFieldContainer>
          <label htmlFor="title">title</label>
          <input
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="title"/>
          {formik.errors.title && formik.touched.title && <div>{formik.errors.title}</div>}
        </InputFieldContainer>
        <InputFieldContainer>
          <label htmlFor="releaseDate">release date</label>
          <input
            type="date"
            value={formik.values.release_date}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            id="releaseDate"/>  
            {formik.errors.release_date && formik.touched.release_date && <div>{formik.errors.release_date}</div>}
        </InputFieldContainer>
        <InputFieldContainer>
          <label htmlFor="poster_path">movie URL</label>
          <input
            type="text"
            value={formik.values.poster_path}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            id="poster_path"/>
          {formik.errors.poster_path && formik.touched.poster_path && <div>{formik.errors.poster_path}</div>}  
        </InputFieldContainer>
        <InputFieldContainer>
          <label htmlFor="genres">genre</label>
          <input
            type="text"
            value={formik.values.genres}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            id="genres"/>
          {formik.errors.genres && formik.touched.genres && <div>{formik.errors.genres}</div>}  
        </InputFieldContainer>
        <InputFieldContainer>
          <label htmlFor="overview">overview</label>
          <input
            type="textarea"
            value={formik.values.overview}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            id="overview"/>
          {formik.errors.overview && formik.touched.overview && <div>{formik.errors.overview}</div>}
        </InputFieldContainer>
        <InputFieldContainer>
          <label htmlFor="runtime">runtime</label>
          <input
            type="number"
            value={formik.values.runtime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="runtime"/>
          {formik.errors.runtime && formik.touched.runtime && <div>{formik.errors.runtime}</div>}  
        </InputFieldContainer>
      </Form>
    </ModalWindow>
  )
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
};

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
};

const validationSchema = Yup.object({
  title: Yup.string()
    .max(60, 'Must be 60 characters or less')
    .required('Required'),
  release_date: Yup.date()
    .required('Required'),
  poster_path: Yup.string()
    .min(6, 'Must be more then 6 characters')
    .matches(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, 'Must follow a specific pattern')
    .required('Required'),
  overview: Yup.string()
    .max(500, 'Must be 500 characters or less')
    .required('Required'),
  runtime: Yup.number()
    .min(0, 'Must be more than 0')
    .required('Required'),
  genres: Yup.string()
    .max(250, 'Must be 60 characters or less')
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
