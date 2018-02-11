import React, { Component } from 'react';

import PageTemplate from 'ui/templates/PageTemplate';
import Container from 'ui/molecules/Container';
import { Wrapper } from './index.styled';

class MainPage extends Component {
  render() {
    return (
      <PageTemplate auth = { true } >
        <Wrapper>
          <Container>
            <ul>
              <li>Список подключенных карточек</li>
              <li>Список подключенных магазинов</li>
              <li>Добавить магазин</li>
              <li>Список магазинов</li>
            </ul>
          </Container>
        </Wrapper>
      </PageTemplate>
    );
  }
}

export default MainPage;
