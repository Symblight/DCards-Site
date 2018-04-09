import React, { PureComponent } from 'react';

import Menu from 'ui/molecules/Menu';

import { Wrapper, ButtonWrap } from './index.styled';

class MenuFilters extends PureComponent {
  render() {
    return (
      <Menu title="Фильтры">
        <Wrapper>
            Поиск по названию магазина
            Фильтр по типу карточки
        </Wrapper>
      </Menu>
    );
  }
}

export default MenuFilters;
