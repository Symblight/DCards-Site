import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Menu from 'ui/molecules/Menu';
import MenuItem from 'ui/molecules/MenuItem';

import { Wrapper, MenuWrap } from './index.styled';

class MenuAdminShop extends PureComponent {
  handleSelectedItem = (event, name) => {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(name);
    }
  };

  render() {
    const { activeItem } = this.props;

    return (
      <Wrapper>
        <MenuWrap title="Меню">
          <MenuItem
            name="BaseInfo"
            onClick={this.handleSelectedItem}
            content="Редактировать инофрмацию о магазине"
            active={activeItem === 'BaseInfo'}
          />
          <MenuItem
            name="EditCards"
            onClick={this.handleSelectedItem}
            content="Редактировать карты"
            active={activeItem === 'EditCards'}
          />
          <MenuItem
            name="EditAdmins"
            onClick={this.handleSelectedItem}
            content="Администраторы"
            active={activeItem === 'EditAdmins'}
          />
        </MenuWrap>
      </Wrapper>
    );
  }
}

export default MenuAdminShop;