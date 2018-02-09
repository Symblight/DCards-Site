import React, { Component } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import SignUpForm from 'components/FormSignUp';

class SignUpPage extends Component {
  render() {
    return (
      <PageTemplate>
        <SignUpForm />
      </PageTemplate>
    );
  }
}

export default SignUpPage;
