import React, { Component } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import SignInForm from 'components/FormSignIn';
import { Wrapper } from './index.styled';

class SignInPage extends Component {
  render() {
    return (
      <PageTemplate>
        <Wrapper>
          <SignInForm />
          </Wrapper>
      </PageTemplate>
    );
  }
}

export default SignInPage;
