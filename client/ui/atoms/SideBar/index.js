import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, WrapPadding } from './index.styled';

class SideBar extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func
};

  onClick =(event) => {
    const { onClick } = this.props;

    if (onClick) {
      onClick(event);
    }
  };

  render() {
    const { className, children } = this.props;
    
    return (
      <Wrapper className={className} onClick={this.onClick}>
        <WrapPadding>
          {children}
        </WrapPadding>
      </Wrapper>
    );
  }
}

export default SideBar;