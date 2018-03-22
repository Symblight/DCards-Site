import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/BlockTemplate';
import Footer from 'ui/organisms/Footer';
import Header from 'components/Header';
import SearchShops from 'ui/organisms/SearchShops';
import ListShops from 'ui/organisms/ListShopsSearch';

import headerShop from 'assets/images/headerShop.jpg';

class ShopsPage extends PureComponent {

  render() {
    const { auth } = this.props;

    return (
      <PageTemplate
        nav={<SearchShops />}
        header={<Header />}
        footer={<Footer />}
        src={headerShop}
      >
        <ListShops />
      </PageTemplate>
    );
  }
}

export default ShopsPage;
