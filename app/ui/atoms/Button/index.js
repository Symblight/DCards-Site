import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button } from './index.styled';

class FlatButton extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props;
    return (
      <Button>{children}</Button>
    );
  }
}

export default FlatButton;
