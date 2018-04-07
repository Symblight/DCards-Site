import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Divider } from './index.styled';

class DropdownItem extends PureComponent {
    static propTypes = {
      children: PropTypes.string,
      onClick: PropTypes.func,
      divider: PropTypes.bool,
      primary: PropTypes.bool
    };

    render() {
      const {
        onClick, children, divider, primary
      } = this.props;

      if (divider) {
        return (
          <Divider />
        );
      }

      return (
        <Wrapper onClick={onClick} custom primary={primary}>
          {children}
        </Wrapper>
      );
    }
}

export default DropdownItem;
