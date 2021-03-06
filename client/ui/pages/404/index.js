import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Header from 'components/Header';
import Img from 'assets/images/error.png';

import { Wrapper, Image } from './index.styled';

class NotFoundPage extends PureComponent {
  render() {
    const { auth } = this.props;

    return (
      <PageTemplate
        header={<Header />}
      >
        <Wrapper>
          <Image src={Img} />
          <h2>Not Found Page {this.props.location.pathname}</h2>
        </Wrapper>
      </PageTemplate>
    );
  }
}

export default NotFoundPage;
