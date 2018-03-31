import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from 'ui/organisms/Footer';

import { Wrapper, Content } from './index.styled';

class GenericTemplate extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    );
  }
}

export default GenericTemplate;
