import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/BlockTemplate';
import Footer from 'ui/organisms/Footer';
import Header from 'ui/organisms/Header';
import Container from 'ui/molecules/Container';
import Grid from 'ui/molecules/Grid';
import SearchShops from 'ui/organisms/SearchShops';
import ListShops from 'ui/organisms/ListShopsSearch';

import {  } from './index.styled';

class ShopsPage extends PureComponent {

  render() {
    return (
      <PageTemplate
        nav={<SearchShops />}
        header={<Header />}
        footer={<Footer />}
      >
        <ListShops />
      </PageTemplate>
    );
  }
}

export default ShopsPage;
