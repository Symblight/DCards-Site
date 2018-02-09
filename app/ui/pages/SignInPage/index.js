import React, { Component } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import SignInForm from 'components/FormSignIn';

class SignInPage extends Component {
  render() {
    return (
      <PageTemplate>
          <SignInForm />
      </PageTemplate>
    );
  }
}

export default SignInPage;
