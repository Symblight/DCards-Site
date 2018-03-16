import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Divider } from './index.styled';

class DropdownItem extends PureComponent {
    static propTypes = {
      children: PropTypes.string,
      onClick: PropTypes.func,
      divider: PropTypes.bool
    };

    render() {
      const { onClick, children, divider } = this.props;

      if (divider) {
        return (
          <Divider />
        );
      }

      return (
        <Wrapper onClick={onClick} custom>
          {children}
        </Wrapper>
      );
    }
}

export default DropdownItem;
