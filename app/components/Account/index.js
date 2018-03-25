import React, { PureComponent } from 'react';

import AccountPage from 'ui/pages/AccountPage';
import withAuthenticated from '../proxy-props/withAuthenticated';

@withAuthenticated
class Account extends PureComponent {

  handleSaveInfo = (data) => {
    console.log(data, 'onSaveInfo');
  };

  render() {

    return (
      <AccountPage
        onSaveInfo={this.handleSaveInfo}
      />
    );
  }
}

export default Account;
