import React, { PureComponent } from 'react';

import AuthPage from 'ui/pages/AuthPage';

class Authentication extends PureComponent {

    handleSignIn = () => {
      console.log('SIGN IN');
    };

    handleSignUp = () => {
      console.log('SIGN UP');
    };

    render() {

      return (
        <AuthPage
          onSignIn={this.handleSignIn}
          onSignUp={this.handleSignUp}
        />
      );
    }
}

export default Authentication;
