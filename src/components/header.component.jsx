import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = ({
  onSearchInputChange,
}) => {

  const [currentSearchValue, handler] = useState("");

  const handleSearch = () => {
    onSearchInputChange(currentSearchValue);
  };

  return (
    <HeaderContainer>
      <HeaderTop>
        <Logo>neflixRoulette</Logo>
        <HeadingButton>Add Movie</HeadingButton>
      </HeaderTop>
      <GeneralHeading>
        FIND YOUR MOVIE
      </GeneralHeading>
      <MovieSearchInputContainer>
        <input type="text" value={currentSearchValue}
          onChange={event => handler(event.target.value)}/>
        <HeadingButton onClick={() => handleSearch()}>Search</HeadingButton>
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

const HeadingButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #f65261;
  color: #f65261;
  padding: 10px;
  font-size: 20px;
  height: 50px;
  cursor: pointer;
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

export default Header;
