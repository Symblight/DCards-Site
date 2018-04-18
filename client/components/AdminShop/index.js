import React, { PureComponent } from 'react';

import DynamicImport from 'components/proxy-props/withDynamicImport';

class AdminShop extends PureComponent {
  render() {
    return (
      <DynamicImport load={() => import('ui/pages/AdminShopPage')}>
        {(Component) => (Component === null
        ? <p>Loading</p>
        : <Component {...this.props} />)}
      </DynamicImport>
    );
  }
}

export default AdminShop;
