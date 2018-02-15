import React, { PureComponent } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Container from 'ui/molecules/Container';
import Grid from 'ui/molecules/Grid';
import { Wrapper } from './index.styled';

class MainPage extends PureComponent {
  render() {
    return (
      <PageTemplate auth = { true } >
        <Wrapper>
          <Container>
            <Grid>Account info</Grid>
            <Grid>
              <ul>
                <li>Список подключенных карточек</li>
                <li>Список подключенных магазинов</li>
                <li>Добавить магазин</li>
                <li>Список магазинов</li>
              </ul>
            </Grid>
          </Container>
        </Wrapper>
      </PageTemplate>
    );
  }
}

export default MainPage;
