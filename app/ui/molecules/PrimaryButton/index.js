import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/atoms/Button';

import { PrimaryButtonWrap } from './index.styled';

class PrimaryButton extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
  }

  render() {
    const { className, children, onClick } = this.props;

    return (
      <PrimaryButtonWrap className={className}>
        <Button onClick={onClick}>{children}</Button>
      </PrimaryButtonWrap>
    );
  }
}

export default PrimaryButton;
