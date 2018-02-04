import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/atoms/Button';

import { PrimaryButtonWrap } from './index.styled';

class PrimaryButton extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <PrimaryButtonWrap>
        <Button>{children}</Button>
      </PrimaryButtonWrap>
    );
  }
}

export default PrimaryButton;
