import React, { PureComponent } from 'react';

import Menu from 'ui/molecules/Menu';
import Button from 'ui/molecules/PrimaryButton';

import { Wrapper } from './index.styled';

class MenuCards extends PureComponent {
  render() {
    return (
      <Menu title="Menu">
        <Wrapper>
          <ul>
            <li>Count cards</li>
            <li>Filters</li>
          </ul>
        </Wrapper>
        <Button>Добавить карту</Button>
      </Menu>
    );
  }
}


export default MenuCards;
