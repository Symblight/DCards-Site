import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Container from 'ui/molecules/Container';
import Button from 'ui/molecules/PrimaryButton';
import Grid from 'ui/molecules/Grid';

import { Wrapper, ContentWrap, FieldWrap } from './index.styled';

class AccountPage extends PureComponent {

  renderContent() {
    return (
      <Wrapper>
        <ContentWrap>
          <FieldWrap>First Name: Alexey</FieldWrap>
          <FieldWrap>Last Name: Tkachenko</FieldWrap>
          <FieldWrap>Email: symblight@gmail.com</FieldWrap>
          <FieldWrap> Password: <Button>Change Password</Button></FieldWrap>
        </ContentWrap>
        <Button>Edit Profile</Button>
      </Wrapper>
    );
  }

  render() {
    return (
      <PageTemplate>
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
