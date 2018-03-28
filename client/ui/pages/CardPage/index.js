import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Header from 'components/Header';
import Container from 'ui/molecules/Container';
import Grid from 'ui/molecules/Grid';
import WrapGrid from 'ui/organisms/WrapGrid';

import { } from './index.styled';

class CardPage extends PureComponent {

  render() {
    const { auth } = this.props;

    return (
      <PageTemplate
        header={<Header />}
      >
        <Grid>
          <WrapGrid />
        </Grid>
      </PageTemplate>
    );
  }
}

export default CardPage;
