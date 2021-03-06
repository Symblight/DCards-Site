import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Header from 'components/Header';
import SignInForm from 'components/SignIn';
import Container from 'ui/molecules/Container';
import Grid from 'ui/molecules/Grid';

import { Wrapper } from './index.styled';

class SignInPage extends PureComponent {
  render() {
    return (
      <PageTemplate
        header={<Header />}
      >
        <Wrapper>
          <Container>
            <Grid>
              <SignInForm />
            </Grid>
          </Container>
        </Wrapper>
      </PageTemplate>
    );
  }
}

export default SignInPage;
