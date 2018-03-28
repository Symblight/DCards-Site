import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PageTemplate from 'ui/templates/PageTemplate';
import Header from 'components/Header';
import Footer from 'ui/organisms/Footer';

class CreateShopPage extends PureComponent {
  render() {
    return (
      <PageTemplate
        header={<Header />}
        footer={<Footer />}
      >
        create shop page
      </PageTemplate>
    );
  }
}

export default CreateShopPage;