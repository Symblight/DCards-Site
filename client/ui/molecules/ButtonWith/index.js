import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonWrap } from './index.styled';

class ButtonWith extends Component {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      onClick: PropTypes.func,
      color: PropTypes.string,
      Icon: PropTypes.any
    }

    render() {
      const {
        children,
        className,
        onClick,
        color,
        Icon
      } = this.props;

      return (
        <ButtonWrap
          className={className}
          color={color}
          onClick={onClick}
        >
          {children}
        </ButtonWrap>
      );
    }
}

export default ButtonWith;