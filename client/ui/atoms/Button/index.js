import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button, IconWrap } from './index.styled';

class FlatButton extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    Icon: PropTypes.any
  }

  onClick = () => {
    const { onClick } = this.props;

    if (onClick) {
      onClick();
    }
  }

  render() {
    const {
      className, children, onClick, Icon
    } = this.props;

    return (
      <Button
        className={className}
        onClick={onClick}
      >
        {Icon ?
          <div>
            <Icon width={20} height={20} />
            &nbsp;
          </div>
          : null
        }
        &nbsp;
        {children}
      </Button>
    );
  }
}

export default FlatButton;
