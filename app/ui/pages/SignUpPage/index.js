import React, { Component } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import SignUpForm from 'components/FormSignUp';
import { Wrapper } from './index.styled';
import Container from 'ui/molecules/Container';

class SignUpPage extends Component {
  render() {
    return (
      <PageTemplate>
        <Wrapper>
          <Container>
            <SignUpForm />
          </Container>
        </Wrapper>
      </PageTemplate>
    );
  }
}

export default SignUpPage;
