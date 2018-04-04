import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button, IconWrap } from './index.styled';

class FlatButton extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
  }

  onClick = () => {
    const { onClick } = this.props;

    if (onClick) {
      onClick();
    }
  }

  render() {
    const {
      className, children, onClick, Icon, type
    } = this.props;

    return (
      <Button
        className={className}
        onClick={onClick}
        type={type}
      >
        {children}
      </Button>
    );
  }
}

export default FlatButton;
