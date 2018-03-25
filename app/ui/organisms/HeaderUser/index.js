import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ItemNavButton from 'ui/molecules/ItemNavButton';
import Header from 'ui/molecules/Header';
import Dropdown from 'ui/molecules/Dropdown';
import DropdownItem from 'ui/molecules/DropdownItem';

import { ButtonsContent } from './index.styled';

class HeaderUser extends PureComponent {
  renderMenuItems() {
    return (
      <ButtonsContent>
        <Link to="/">
          <ItemNavButton>Магазины</ItemNavButton>
        </Link>
        <Link to="/main">
          <ItemNavButton>Главная</ItemNavButton>
        </Link>
      </ButtonsContent>
    );
  }

  render() {
    const { onSignOut } = this.props;

    return (
      <Header>
        {this.renderMenuItems()}
        <Dropdown title="Alexey">
          <Link to="/account">
            <DropdownItem>
                Профиль
            </DropdownItem>
          </Link>
          <DropdownItem>
              Настройки
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={onSignOut}>
              Выйти из профиля
          </DropdownItem>
        </Dropdown>
      </Header>
    );
  }
}

export default HeaderUser;