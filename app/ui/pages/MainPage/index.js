import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Container from 'ui/molecules/Container';
import Grid from 'ui/molecules/Grid';
import InfoPanelAccount from 'ui/organisms/InfoPanel';
import ListMain from 'ui/organisms/ListMain';

import { Wrapper } from './index.styled';

class MainPage extends PureComponent {
  render() {
    return (
      <PageTemplate>
        <Wrapper>
          <Container>
            <InfoPanelAccount />
            <ListMain />
          </Container>
        </Wrapper>
      </PageTemplate>
    );
  }
}

export default MainPage;
