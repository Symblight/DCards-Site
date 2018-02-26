import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button } from './index.styled';

class FlatButton extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    typeButton: PropTypes.string,
    className: PropTypes.string
  }

  render() {
    const { className, children } = this.props;
    return (
      <Button {...this.props} className={className}>{children}</Button>
    );
  }
}

export default FlatButton;
