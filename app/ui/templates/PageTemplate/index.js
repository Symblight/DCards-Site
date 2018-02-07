import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Footer from 'ui/organisms/Footer';
import Header from 'ui/organisms/Header';
import { Wrapper, Content } from './index.styled';

class PageTemplate extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.node.isRequired
  }

  render() {
    const { children, color } = this.props;

    return (
      <Wrapper>
        <Header />
        <Content>
          {children}
        </Content>
        <Footer />
      </Wrapper>
    );
  }
}

export default PageTemplate;
