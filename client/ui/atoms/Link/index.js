import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { HighlightLink } from './index.styled';

class Link extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {
    const { className, children } = this.props;
    
    return (
      <span className={className}>
        <HighlightLink href="#" >{children}</HighlightLink>
      </span>
    );
  }
}

export default Link;
