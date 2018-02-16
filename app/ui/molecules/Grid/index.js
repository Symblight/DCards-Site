import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Block from 'ui/atoms/Block';
import { Wrapper } from './index.styled';

class Grid extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { className, children, title } = this.props;

    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    );
  }
}

export default Grid;
