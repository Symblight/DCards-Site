import React, { PureComponent } from 'react';

import AccountPage from 'ui/pages/AccountPage';
import DynamicImport from 'components/proxy-props/withDynamicImport';

class Account extends PureComponent {
  render() {
    return (
      <DynamicImport load={() => import('ui/pages/AccountPage')}>
        {(Component) => (Component === null
        ? <p>Loading</p>
        : <Component {...this.props} />)}
      </DynamicImport>
    );
  }
}

export default Account;
