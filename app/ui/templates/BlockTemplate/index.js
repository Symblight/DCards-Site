import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Footer from 'ui/organisms/Footer';
import Header from 'ui/organisms/Header';
import { Wrapper, Content, Container, HeroWrap } from './index.styled';

class BlockTemplate extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.node,
    auth: PropTypes.bool
  };

  render() {
    const { header, children } = this.props;

    return (
      <Wrapper>
        <Header />
        <HeroWrap>{header}</HeroWrap>
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    );
  }
}

export default BlockTemplate;
