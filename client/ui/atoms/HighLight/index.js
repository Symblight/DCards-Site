import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { HighlightWrap } from './index.styled';

class HighLight extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {
    const { className, children } = this.props;

    return (
      <HighlightWrap className={className}>{children}</HighlightWrap>
    );
  }
}

export default HighLight;
