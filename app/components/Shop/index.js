import React, { PureComponent } from 'react';

import ShopPage from 'ui/pages/ShopPage';
import withAuthenticated from '../proxy-props/withAuthenticated';
import withShopInfo from '../proxy-props/withShopInfo';

@withAuthenticated
@withShopInfo
class Shop extends PureComponent {

  render() {
    const { data } = this.props;

    return (
      <ShopPage
        data={data}
      />
    );
  }
}

export default Shop;
