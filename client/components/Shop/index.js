import React, { PureComponent } from 'react';

import ShopPage from 'ui/pages/ShopPage';
import withShopInfo from '../proxy-props/withShopInfo';

@withShopInfo
class Shop extends PureComponent {

  render() {
    const { data, config } = this.props;

    return (
      <ShopPage
      />
    );
  }
}

export default Shop;
