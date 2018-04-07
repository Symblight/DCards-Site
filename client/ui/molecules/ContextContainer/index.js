import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  MenuBottom,
  MenuTop,
  Wrapper,
  Arrow,
  ArrowTopWrap,
  ArrowBottomWrap
} from './index.styled';

class ContextContainer extends PureComponent {
    static propTypes = {
      children: PropTypes.node,
      position: PropTypes.string,
      onShow: PropTypes.func
    }

    componentDidMount() {
      document.addEventListener('click', this.handleOutsideClick, false);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    handleOutsideClick = (event) => {
      const { onShow } = this.props;

      if (!this.menu.contains(event.target)) {
        if (onShow) {
          onShow();
        }
      }
    }

    renderMenu() {
      const { position } = this.props;

      if (position === 'top-left') {
        return (
          this.renderTopMenu()
        );
      }

      return (
        this.renderBottomMenu()
      );
    }

    renderBottomMenu() {
      const { children } = this.props;

      return (
        <MenuBottom>
          {children}
          <ArrowBottomWrap>
            <Arrow />
          </ArrowBottomWrap>
        </MenuBottom>
      );
    }

    renderTopMenu() {
      const { children } = this.props;

      return (
        <MenuTop>
          {children}
          <ArrowTopWrap>
            <Arrow />
          </ArrowTopWrap>
        </MenuTop>
      );
    }

    render() {
      const { children, onShow } = this.props;

      return (
        <Wrapper innerRef={(node) => { this.menu = node; }}>
          {
            this.renderMenu()
          }
        </Wrapper>
      );
    }
}

export default ContextContainer;