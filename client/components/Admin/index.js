import React, { PureComponent } from 'react';

import Root from 'ui/pages/RootPage';
import Loading from 'ui/atoms/Loading';
import DynamicImport from 'components/proxy-props/withDynamicImport';

class RootPage extends PureComponent {
  render() {
    return (
      <DynamicImport load={() => import('ui/pages/RootPage')}>
        {(Component) => (Component === null
    ? <Loading />
    : <Component {...this.props} />)}
      </DynamicImport>
    );
  }
}

export default RootPage;
