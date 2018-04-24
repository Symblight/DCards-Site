import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './index.styled';

class Card extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {
    const { className, children } = this.props;

    return (
      <Wrapper className={className} {...this.props}>{children}</Wrapper>
    );
  }
}

export default Card;
