import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, HeaderWrap } from './index.styled';

class Menu extends PureComponent {

    static propTypes = {
      children: PropTypes.node.isRequired,
      title: PropTypes.string,
      className: PropTypes.string
    };

    render() {
      const { title, children, className } = this.props;

      return (
        <Wrapper className={className}>
          {title ? <HeaderWrap>{title}</HeaderWrap> : null}
          {children}
        </Wrapper>
      );
    }
}

export default Menu;
