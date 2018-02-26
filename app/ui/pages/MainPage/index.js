import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Container from 'ui/molecules/Container';
import Button from 'ui/molecules/AddButton';
import Grid from 'ui/molecules/Grid';
import InfoPanelAccount from 'ui/organisms/InfoPanel';
import ListMain from 'ui/organisms/ListMain';

import { Wrapper, ButtonWrap } from './index.styled';

class MainPage extends PureComponent {

  renderButton() {
    return(
          <ButtonWrap>
            <Button>Add new card</Button>
          </ButtonWrap>
    );
  }

  render() {
    return (
      <PageTemplate>
        <Wrapper>
          <Container>
            <InfoPanelAccount />
            <ListMain />
            {this.renderButton()}
          </Container>
        </Wrapper>
      </PageTemplate>
    );
  }
}

export default MainPage;
