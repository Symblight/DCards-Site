import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, WrapPadding } from './index.styled';

class SideBar extends PureComponent {
  render() {
    return (
      <Wrapper>
        <WrapPadding>
         SideBar
        </WrapPadding>
      </Wrapper>
    );
  }
}

export default SideBar;