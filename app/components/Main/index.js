import React, { PureComponent } from 'react';

import MainPage from 'ui/pages/MainPage';
import withAuthenticated from '../proxy-props/withAuthenticated';

@withAuthenticated
class Main extends PureComponent {

    handleSignOut = () => {
      console.log('Sign out');
    }

    render() {
      const { auth } = this.props;
      console.log(11, auth);

      return (
        <MainPage />
      );
    }
}

export default Main;
