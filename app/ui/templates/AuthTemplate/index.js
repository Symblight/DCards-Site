import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Footer from 'ui/organisms/Footer';
import Header from 'ui/organisms/Header';
import { Wrapper, Content, Container } from './index.styled';

class AuthTemplate extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        <Header />
        <Container>
        <Content>
          {children}
        </Content>
        </Container>
        <Footer />
      </Wrapper>
    );
  }
}

export default AuthTemplate;
