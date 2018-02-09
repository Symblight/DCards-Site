import React, { Component } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import SignUpForm from 'components/FormSignUp';
import { Wrapper } from './index.styled';

class SignUpPage extends Component {
  render() {
    return (
      <PageTemplate>
        <Wrapper>
          <SignUpForm />
        </Wrapper>
      </PageTemplate>
    );
  }
}

export default SignUpPage;
