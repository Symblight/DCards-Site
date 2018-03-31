import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Block from 'ui/atoms/Block';
import Circle from 'ui/atoms/Circle';

import { Wrapper, Article, Description, Title } from './index.styled';

class WayBlock extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const { children, title } = this.props;

    return (
      <Wrapper>
        <Article>
          <Circle />
          <Description>
            <Title>{title}</Title>
            <Block>{children}</Block>
          </Description>
        </Article>
      </Wrapper>
    );
  }
}

export default WayBlock;
