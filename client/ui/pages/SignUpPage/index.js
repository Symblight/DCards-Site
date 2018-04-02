import React, { Component } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Header from 'components/Header';
import SignUpForm from 'components/SignUp';
import Container from 'ui/molecules/Container';
import Grid from 'ui/molecules/Grid';

import { Wrapper } from './index.styled';

class SignUpPage extends Component {
  render() {
    return (
      <PageTemplate
        header={<Header />}
      >
        <Wrapper>
          Создать учетную запись
          <SignUpForm />
          <div>Уже есть аккаунт? Войти</div>
        </Wrapper>
      </PageTemplate>
    );
  }
}

export default SignUpPage;
