import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/atoms/Button';

import { PrimaryButtonWrap } from './index.styled';

class PrimaryButton extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { className, children } = this.props;

    return (
      <PrimaryButtonWrap>
        <Button className={className}>{children}</Button>
      </PrimaryButtonWrap>
    );
  }
}

export default PrimaryButton;
