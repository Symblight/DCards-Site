import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/BlockTemplate';
import Footer from 'ui/organisms/Footer';
import Header from 'components/Header';
import SignInForm from 'components/SignIn';

import { Wrapper, FormContainer, DiscriptionContainer } from './index.styled';

const DISCRIPTION_TEXT = 'DISCRIPTION';

class AuthPage extends PureComponent {
  renderHero() {
    return (
      <FormContainer>
        <DiscriptionContainer>{DISCRIPTION_TEXT}</DiscriptionContainer>
        <SignInForm />
      </FormContainer>
    );
  }

  render() {
    return (
      <PageTemplate
        header={<Header />}
        footer={<Footer />}
        nav={this.renderHero()}
      >
        <Wrapper />
      </PageTemplate>
    );
  }
}

export default AuthPage;
