import React, { PureComponent } from 'react';

import ShopPage from 'ui/pages/ShopPage';
import Loading from 'ui/atoms/Loading';
import DynamicImport from 'components/proxy-props/withDynamicImport';
import withShopInfo from '../proxy-props/withShopInfo';

@withShopInfo
class Shop extends PureComponent {

  render() {
    const { data, config } = this.props;

    return (
      <DynamicImport load={() => import('ui/pages/ShopPage')}>
        {(Component) => (Component === null
        ? <Loading />
        : <Component data={data} config={config} {...this.props} />)}
      </DynamicImport>
    );
  }
}

export default Shop;
