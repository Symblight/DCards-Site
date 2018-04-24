import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PageTemplate from 'ui/templates/AdminTemplate';
import Header from 'components/Header';
import Footer from 'ui/organisms/Footer';

import { Wrapper } from './index.styled';

class AdminPage extends PureComponent {
    render() {
      const { auth, children } = this.props;

      return (
        <PageTemplate
          footer={<Footer />}
        >
          <Wrapper>
            <ul>
              <li>INFO ABOUT MYSELF</li>
              <li>MENU IN LEFT (Statistics)</li>
              <li>TABLE OF USERS (ban, unban)</li>
              <li>TABLE OF SHOPS (ban, unban, edit)</li>
              <li>TABLE OF CARDS SHOPS (edit)</li>
              <li>COLOS SETTING SITE (color panel and get COLORS)</li>
            </ul>
          </Wrapper>
        </PageTemplate>
      );
    }
}

export default AdminPage;
