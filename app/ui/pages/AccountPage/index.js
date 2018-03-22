import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Header from 'components/Header';
import Container from 'ui/molecules/Container';
import Button from 'ui/molecules/PrimaryButton';
import Grid from 'ui/molecules/Grid';
import FieldText from 'ui/molecules/FieldText';
import FieldPassword from 'ui/molecules/FieldPassword';

import { Wrapper, ContentWrap, ButtonWrap } from './index.styled';

const TEST_USER = {
  firstName: 'Alexey',
  lastName: 'Tkachenko',
  email: 'symblight@gmail.com'
};

class AccountPage extends PureComponent {

  handleClick = () => {
    console.log(111111);
  }

  renderContent() {
    return (
      <Wrapper>
        <ContentWrap>
          <FieldText
            title="Имя:"
            value={TEST_USER.firstName}
          />
          <FieldText
            title="Фамилия:"
            value={TEST_USER.lastName}
          />
          <FieldText
            title="Email:"
            value={TEST_USER.email}
          />
          {
            <FieldPassword
              title="Пароль:"
              value="123456789"
              onClick={this.handleClick}
            />
         }
        </ContentWrap>
        <ButtonWrap>
          <Button>Изменить профиль</Button>
        </ButtonWrap>
      </Wrapper>
    );
  }

  render() {
    return (
      <PageTemplate
        header={<Header />}
      >
        <Container>
          <Grid>
            {
              this.renderContent()
            }
          </Grid>
        </Container>
      </PageTemplate>
    );
  }
}

export default AccountPage;
