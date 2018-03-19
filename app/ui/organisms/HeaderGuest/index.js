import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ItemNavButton from 'ui/molecules/ItemNavButton';
import Header from 'ui/molecules/Header';

import { UserNav } from './index.styled';

class HeaderGuest extends PureComponent {
  render() {
    return (
      <Header>
        <UserNav>
          <li>
            <Link to="/login">
              <ItemNavButton type="login">Войти</ItemNavButton>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <ItemNavButton>Регистрация</ItemNavButton>
            </Link>
          </li>
        </UserNav>
      </Header>
    );
  }
}

export default HeaderGuest;