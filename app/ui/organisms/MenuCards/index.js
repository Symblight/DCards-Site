import React, { PureComponent } from 'react';

import Menu from 'ui/molecules/Menu';
import withFilterUserCards from 'components/proxy-props/withFilterUserCards';

import { Wrapper, ButtonWrap } from './index.styled';

@withFilterUserCards
class MenuCards extends PureComponent {
  render() {
    const { cards } = this.props;

    return (
      <Menu title="Меню">
        <Wrapper>
          <ul>
            <li>Количество: {cards.length}</li>
          </ul>
        </Wrapper>
        <ButtonWrap>Добавить карту</ButtonWrap>
      </Menu>
    );
  }
}


export default MenuCards;
