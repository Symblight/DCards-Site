import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './index.styled';

class TabTitle extends PureComponent {

    static propTypes = {
      children: PropTypes.node.isRequired,
      onClick: PropTypes.func,
      selected: PropTypes.bool
    };

    onClick = (event) => {
      const { onClick, id } = this.props;

      if (onClick) {
        onClick(event, id);
      }
    }

    render() {
      const { children, id, selected } = this.props;

      return (
        <Wrapper onClick={this.onClick} key={id} active={selected}>
          {children}
        </Wrapper>
      );
    }
}
export default TabTitle;
