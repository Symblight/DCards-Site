import React, { Component } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Container from 'ui/molecules/Container';
import Grid from 'ui/molecules/Grid';

class AccountPage extends Component {
  render() {
    return (
      <PageTemplate>
        <Container>
          <Grid>
            Account Page
          </Grid>
        </Container>
      </PageTemplate>
    );
  }
}

export default AccountPage;
