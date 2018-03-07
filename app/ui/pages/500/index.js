import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Footer from 'ui/organisms/Footer';
import Header from 'ui/organisms/Header';
import Img from 'assets/images/error.png';

import { Wrapper, Image } from './index.styled';

class BrokenPage extends PureComponent {
  render() {
    return (
      <PageTemplate>
        <Wrapper>
          <h2>500 Something has broken. {this.props.location.pathname}</h2>
        </Wrapper>
      </PageTemplate>
    );
  }
}

export default BrokenPage;
