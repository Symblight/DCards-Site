import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Block from 'ui/atoms/Block';

import { Border } from './index.styled';

class BlockBorder extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <Border>
        <Block>{children}</Block>
      </Border>
    );
  }
}

export default BlockBorder;
