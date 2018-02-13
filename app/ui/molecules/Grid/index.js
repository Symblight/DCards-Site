import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Block from 'ui/atoms/Block';
import { Wrapper } from './index.styled';

class Grid extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children, title } = this.props;

    return (
        <Wrapper>
            <Block>
                {children}
            </Block>
        </Wrapper>
    );
  }
}

export default Grid;
