import React, { Component } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import SignUpForm from 'components/FormSignUp';
import { Wrapper } from './index.styled';
import Container from 'ui/molecules/Container';
import Grid from 'ui/molecules/Grid';

class SignUpPage extends Component {
  render() {
    return (
      <PageTemplate>
        <Wrapper>
          <Container>
            <Grid>
              <SignUpForm />
            </Grid>
          </Container>
        </Wrapper>
      </PageTemplate>
    );
  }
}

export default SignUpPage;
