import React, { PureComponent } from 'react';

import ShopsPage from 'ui/pages/ShopsPage';
import DynamicImport from 'components/proxy-props/withDynamicImport';

class ShopsContainer extends PureComponent {
  render() {
    return (
      <DynamicImport load={() => import('ui/pages/ShopsPage')}>
        {(Component) => (Component === null
    ? <p>Loading</p>
    : <Component {...this.props} />)}
      </DynamicImport>
    );
  }
}

export default ShopsContainer;
