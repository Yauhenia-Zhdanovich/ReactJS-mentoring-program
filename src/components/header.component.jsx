import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { RedButton } from '../assets/shared-styles.js';
import { useInput } from '../hooks/use-input.hook.js';

const Header = ({
  onSearchInputChange,
  onAddMovieClick,
}) => {
  const [searchValue, bindSerchValue] = useInput('');

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
        <RedButton onClick={() => onSearchInputChange(searchValue)}>Search</RedButton>
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

export default React.memo(Header);
