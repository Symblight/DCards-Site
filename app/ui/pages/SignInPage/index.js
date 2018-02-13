import React, { Component } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import SignInForm from 'components/FormSignIn';
import { Wrapper } from './index.styled';
import Container from 'ui/molecules/Container';

class SignInPage extends Component {
  render() {
    return (
      <PageTemplate>
          <Wrapper>
            <Container>
              <SignInForm />
            </Container>
          </Wrapper>
      </PageTemplate>
    );
  }
}

export default SignInPage;
