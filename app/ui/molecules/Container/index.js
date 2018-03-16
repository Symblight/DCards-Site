import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './index.styled';

class Container extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { className, children } = this.props;

    return (
      <Wrapper className={className}>
        {children}
      </Wrapper>
    );
  }
}

export default Container;
