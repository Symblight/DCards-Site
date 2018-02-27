import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button } from './index.styled';

class FlatButton extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    typeButton: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
  }

  onClick = () => {
    const { onClick } = this.props;

    if(onClick) {
      onClick();
    }
  }

  render() {
    const { className, children, onClick } = this.props;
    
    return (
      <Button className={className} onClick = {onClick}>{children}</Button>
    );
  }
}

export default FlatButton;
