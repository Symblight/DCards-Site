import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PageTemplate from 'ui/templates/AdminTemplate';
import Header from 'components/Header';
import HeaderAdmin from 'ui/molecules/HeaderAdmin';
import Footer from 'ui/organisms/Footer';
import SideBar from 'ui/molecules/SideBarAdmin';

import AdminShopContainer from 'ui/organisms/AdminShopContainer';
import InfoShop from 'ui/organisms/InfoShop';

import { Wrapper } from './index.styled';

class AdminPageShop extends PureComponent {
    static propTypes = {
      children: PropTypes.node
    }

    render() {
      const { auth, children } = this.props;

      return (
        <PageTemplate
          header={<HeaderAdmin />}
          footer={<Footer />}
        >
          <Wrapper>
            <AdminShopContainer />
          </Wrapper>
        </PageTemplate>
      );
    }
}

export default AdminPageShop;
