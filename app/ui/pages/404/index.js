import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import HeaderGuest from 'ui/organisms/HeaderGuest';
import HeaderUser from 'ui/organisms/HeaderUser';
import Img from 'assets/images/error.png';

import { Wrapper, Image } from './index.styled';

class NotFoundPage extends PureComponent {
  render() {
    const { auth } = this.props;

    return (
      <PageTemplate
        header={auth ? <HeaderUser /> : <HeaderGuest />}
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
