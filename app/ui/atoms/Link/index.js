import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { HighlightLink } from './index.styled';

class Link extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props;
    
    return (
      <span>
        <HighlightLink href="#" >{children}</HighlightLink>
      </span>
    );
  }
}

export default Link;
