import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { HighlightWrap } from './index.styled';

class HighLight extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <HighlightWrap>{children}</HighlightWrap>
    );
  }
}

export default HighLight;
