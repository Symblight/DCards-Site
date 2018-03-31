import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PageTemplate from 'ui/templates/PageTemplate';
import Header from 'components/Header';
import Footer from 'ui/organisms/Footer';
import MenuShop from 'ui/organisms/MenuShop';
import ListCardsShop from 'ui/organisms/ListCardsShop';

import { Wrapper, MenuWrap } from './index.styled';

class ShopPage extends PureComponent {
    static propTypes = {
      children: PropTypes.node
    }

    render() {
      const { auth, children } = this.props;

      return (
        <PageTemplate
          header={<Header />}
          footer={<Footer />}
        >
          <Wrapper>
            <ListCardsShop />
            <MenuShop>Shop</MenuShop>
          </Wrapper>
        </PageTemplate>
      );
    }
}

export default ShopPage;
