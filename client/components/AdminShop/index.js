import React, { PureComponent } from 'react';

import Loading from 'ui/atoms/Loading';
import DynamicImport from 'components/proxy-props/withDynamicImport';

class AdminShop extends PureComponent {
  render() {
    return (
      <DynamicImport load={() => import('ui/pages/AdminPageShop')}>
        {(Component) => (Component === null
    ? <Loading />
    : <Component {...this.props} />)}
      </DynamicImport>
    );
  }
}

export default AdminShop;
