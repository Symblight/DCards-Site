import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PageTemplate from 'ui/templates/PageTemplate';
import Header from 'components/Header';
import Footer from 'ui/organisms/Footer';

import AdminShopContainer from 'ui/organisms/AdminShopContainer';
import InfoShop from 'ui/organisms/InfoShop';

import { Wrapper } from './index.styled';

class AdminShopPage extends PureComponent {
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
            <InfoShop />
            <AdminShopContainer />
          </Wrapper>
        </PageTemplate>
      );
    }
}

export default AdminShopPage;
