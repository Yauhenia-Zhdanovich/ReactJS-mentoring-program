import React from 'react';
import styled from 'styled-components'

const Footer = () => (
  <FooterContainer>
    <p>netflix roulette</p>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default React.memo(Footer);
