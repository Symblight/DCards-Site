import React, { PureComponent } from 'react';

import AccountPage from 'ui/pages/AccountPage';
import withAuthenticated from '../proxy-props/withAuthenticated';

@withAuthenticated
class Account extends PureComponent {

  render() {

    return (
      <AccountPage />
    );
  }
}

export default Account;
