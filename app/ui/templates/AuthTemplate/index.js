import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Footer from 'ui/organisms/Footer';
import Header from 'ui/organisms/Header';
import { Wrapper, Content, Container } from './index.styled';

class AuthTemplate extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    auth: PropTypes.bool
  };

  render() {
    const { children, auth } = this.props;

    return (
      <Wrapper>
        <Header auth = {auth} />
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
