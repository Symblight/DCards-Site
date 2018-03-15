import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Header from 'ui/organisms/Header';
import Container from 'ui/molecules/Container';
import Button from 'ui/molecules/PrimaryButton';
import Grid from 'ui/molecules/Grid';
import FieldText from 'ui/molecules/FieldText';
import FieldPassword from 'ui/molecules/FieldPassword';

import { Wrapper, ContentWrap, ButtonWrap } from './index.styled';

class AccountPage extends PureComponent {

  handleClick = () => {
    console.log(111111);
  }

  renderContent() {
    return (
      <Wrapper>
        <ContentWrap>
          <FieldText
            title="First Name:"
            value="Alexey"
          />
          <FieldText
            title="Last Name:"
            value="Tkachenko"
          />
          <FieldText
            title="Email:"
            value="symblight@gmail.com"
          />
          {
            <FieldPassword
              title="Password:"
              value="123456789"
              onClick={this.handleClick}
            />
         }
        </ContentWrap>
        <ButtonWrap>
          <Button>Edit Profile</Button>
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
