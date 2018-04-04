import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


import { PrimaryButtonWrap } from './index.styled';

class PrimaryButton extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
  }

  render() {
    const { className, children, onClick } = this.props;

    return (
      <PrimaryButtonWrap
        className={className}
        onClick={onClick}
        {...this.props}
      >{children}
      </PrimaryButtonWrap>
    );
  }
}

export default PrimaryButton;
