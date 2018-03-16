import React, { PureComponent } from 'react';

import Menu from 'ui/molecules/Menu';

import { Wrapper, ButtonWrap } from './index.styled';

class MenuFilters extends PureComponent {
  render() {
    return (
      <Menu title="Фильтры">
        <Wrapper>
                    Filters
        </Wrapper>
        <ButtonWrap>Применить</ButtonWrap>
      </Menu>
    );
  }
}

export default MenuFilters;
