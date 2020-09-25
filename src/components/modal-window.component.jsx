import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { RedButton } from '../assets/shared-styles.js';

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onCloseWindow.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onCloseWindow);
  }

  onCloseWindow(event) {
    if (event.keyCode == 27) {
      this.props.handleClose(false);
    }
  }

  render() {
    return (
      <Screen className={this.props.showModalWindow ? 'display-block' : 'display-none'}>
        <ModalWindowContainer>
          <ModalHeader>
            <CloseButtonContaier>
              <RedButton onClick={() => {this.props.handleClose(false)}}>×</RedButton>
            </CloseButtonContaier>
            <ModalHeading>{this.props.headerText}</ModalHeading>
          </ModalHeader>
          <ModalBody>
            {this.props.children}
          </ModalBody>
          <ModalFooter>
            <FooterButton>Reset</FooterButton>
            <SubmitButton>Submit</SubmitButton>
          </ModalFooter>
        </ModalWindowContainer>
      </Screen> 
    )
  }
}

const FooterButton = styled(RedButton)`
  display: block;
  margin: 10px;
`;

const SubmitButton = styled(FooterButton)`
  background-color: #f65261;
  color: #232323;
`;

const ModalWindowContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #232323;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
  transition: all .8s;
  padding: 30px;
  width: 60%;
`;

const ModalHeader = styled.header`
  padding: 5px 20px;
`;

const ModalBody = styled.div`
  padding: 10px 15px;
  text-align: center;
  min-height: 400px;
`;

const ModalFooter = styled.footer`
  height: 35px;
  padding: 30px;
  display: flex;
  justify-content: flex-end;
`;

const CloseButtonContaier = styled.div`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ModalHeading = styled.h2`
  font-size: 28px;
`;

const Screen = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,.7);
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
`;

ModalWindow.propTypes = {
  showModalWindow: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.element
};

export default ModalWindow;
