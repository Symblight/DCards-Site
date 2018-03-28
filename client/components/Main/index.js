import React, { PureComponent } from 'react';

import MainPage from 'ui/pages/MainPage';

class Main extends PureComponent {

    handleSignOut = () => {
      console.log('Sign out');
    }

    render() {
      return (
        <MainPage />
      );
    }
}

export default Main;
