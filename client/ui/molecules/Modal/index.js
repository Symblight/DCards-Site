import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import CloseSVG from 'assets/images/icons/ic_clear.svg';

import { ModalOverlay, ModalWrap, CloseButton } from './index.styled';

class Modal extends Component {
    static propTypes = {
      onClose: PropTypes.func.isRequired,
      show: PropTypes.bool,
      children: PropTypes.node
    };

    componentDidMount() {
      document.addEventListener('click', this.handleOutsideClick, false);
      window.addEventListener('keyup', this.handleKeyUp, false);
      document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleOutsideClick, false);
      window.removeEventListener('keyup', this.handleKeyUp, false);
      document.body.style.overflow = 'auto';
    }

    handleKeyUp = (event) => {
      const { onClose } = this.props;

      const keys = {
        27: () => {
          event.preventDefault();
          onClose();
          window.removeEventListener('keyup', this.handleKeyUp, false);
        },
      };

      if (keys[event.keyCode]) { keys[event.keyCode](); }
    };

    handleOutsideClick = (event) => {
      const { show, onClose } = this.props;

      if (!_.isNil(this.modal)) {
        if (!this.modal.contains(event.target) && event.target.nodeName !== 'BUTTON') {
          onClose();
          document.body.style.overflow = 'auto';
          document.removeEventListener('click', this.handleOutsideClick, false);
        }
      }
    };

    render() {
      const { show, children, onClose } = this.props;

      return (
        <ModalOverlay>
          <ModalWrap innerRef={(node) => { this.modal = node; }}>
            {children}
            <CloseButton onClick={onClose}>
              <CloseSVG height={45} width={45} />
            </CloseButton>
          </ModalWrap>
        </ModalOverlay>
      );
    }
}

export default Modal;