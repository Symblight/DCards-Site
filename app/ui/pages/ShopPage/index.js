import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PageTemplate from 'ui/templates/PageTemplate';
import Container from 'ui/molecules/Container';
import HeaderGuest from 'ui/organisms/HeaderGuest';
import HeaderUser from 'ui/organisms/HeaderUser';
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
          header={auth ? <HeaderUser /> : <HeaderGuest />}
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
