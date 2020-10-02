import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

const Loader = (props) => {

  return (
    <LoaderContainer className={props.loading ? 'display-block' : 'display-none'}>
      <LoaderBlock className="lds-dual-ring"/>
    </LoaderContainer>
  )
}

const LoaderBlock = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const mapStateToProps = state => {
  const { loading } = state;

  return { loading: loading };
}

export default connect(mapStateToProps)(Loader);
