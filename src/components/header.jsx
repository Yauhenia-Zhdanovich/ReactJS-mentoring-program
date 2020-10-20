import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";

import { RedButton } from '../assets/shared-styles.js';
import { useInput } from '../hooks/use-input.hook.js';
import { CHANGE_SEARCH_VALUE } from '../redux/actions/appActionsTypes.js';

const Header = ({
  onAddMovieClick,
  changeSearchValue,
}) => {
  const [searchValue, bindSerchValue, setNewValue] = useInput('');
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get('search')) {
      setNewValue(params.get('search'));
    }
  }, []);

  const onSearch = (searchValue) => {
    if (searchValue === '') {
      history.push('/');
    } else {
      history.push(`?search=${searchValue}&searchBy=title`);
    }
    changeSearchValue(searchValue)
  }

  return (
    <HeaderContainer>
      <HeaderTop>
        <Logo>neflixRoulette</Logo>
        <RedButton onClick={() => onAddMovieClick(true)}>Add Movie</RedButton>
      </HeaderTop>
      <GeneralHeading>
        FIND YOUR MOVIE
      </GeneralHeading>
      <MovieSearchInputContainer>
        <input type="text" {...bindSerchValue}/>
        <RedButton onClick={() => onSearch(searchValue)}>Search</RedButton>
      </MovieSearchInputContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 250px;
  padding: 40px 0;
  width: 80%;
  margin: 0 auto;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 25px;
  padding: 40px 0;
`;

const MovieSearchInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const GeneralHeading = styled.h1`
  padding: 40px 0;
  text-align: lef;
  font-size: 28px;
`;

Header.propTypes = {
  onSearchInputChange: PropTypes.func,
}


const changeSearchValue = searchValue => ({
  type: CHANGE_SEARCH_VALUE,
  payload: { search: searchValue, searchBy: 'title' },
});

const mapDispatchToProps = dispatch => {
  return {
    changeSearchValue: searchValue => dispatch(changeSearchValue(searchValue)),
  }
}

export default React.memo(connect(null, mapDispatchToProps)(Header));
