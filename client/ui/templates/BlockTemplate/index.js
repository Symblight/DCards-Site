import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, HeroWrap, Wrap } from './index.styled';

class BlockTemplate extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.node,
    nav: PropTypes.node,
    footer: PropTypes.node,
    src: PropTypes.string
  };

  render() {
    const {
      nav, footer, header, children, src
    } = this.props;

    return (
      <Wrapper>
        {header}
        <HeroWrap src={src}>
          <Wrap>
            {nav}
          </Wrap>
        </HeroWrap>
        <Content>
          <Wrap>{children}</Wrap>
        </Content>
        {footer}
      </Wrapper>
    );
  }
}

export default BlockTemplate;
