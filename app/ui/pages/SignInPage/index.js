import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import SignInForm from 'components/SignIn';
import { Wrapper } from './index.styled';
import Container from 'ui/molecules/Container';
import Grid from 'ui/molecules/Grid';

class SignInPage extends PureComponent {
  render() {
    return (
      <PageTemplate>
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
