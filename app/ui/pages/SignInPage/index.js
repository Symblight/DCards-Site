import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PageTemplate from 'ui/templates/PageTemplate';
import SignInForm from 'components/FormSignIn';

class SignInPage extends Component {
  render() {
    return (
      <PageTemplate>
        <SignInForm />
        <div><Link to="/test">Demo components</Link></div>
      </PageTemplate>
    );
  }
}

export default SignInPage;
