import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';

import LogoSVG from 'assets/images/react.svg';
import Dropdown from 'ui/molecules/Dropdown';
import DropdownItem from 'ui/molecules/DropdownItem';
import ItemNavButton from 'ui/molecules/ItemNavButton';
import { signOut } from 'components/reducerUser/actions';

import {
  Wrapper,
  Content,
  UserNav,
  LogoWrap,
  HeaderText,
  TextName,
  ButtonsContent
} from './index.styled';

const DROPDOWN_ITEMS = [
  {
    value: 'Профиль'
  },
  {
    value: 'Настройки'
  },
  {
    value: 'Создать магазин'
  },
  {
    value: 'Выйти из профиля'
  }
];

const mapStateToProps = (state) => ({
  userReducer: state.reducerLogin
});

const mapDispatchToProps = (dispatch) => ({
  onSignOut: () => dispatch(signOut())
});

@connect(mapStateToProps, mapDispatchToProps)
class Header extends PureComponent {

  renderMenuItems() {
    return (
      <ButtonsContent>
        <Link to="/shops">
          <ItemNavButton>Магазины</ItemNavButton>
        </Link>
        <Link to="/main">
          <ItemNavButton>Главная</ItemNavButton>
        </Link>
      </ButtonsContent>
    );
  }

  renderLogoWrap() {
    return (
      <LogoWrap>
        <Link to="/"><LogoSVG width={50} height={50} /></Link>
        <HeaderText>
          <span>alpha</span>
          <TextName>DiCards</TextName>
        </HeaderText>
      </LogoWrap>
    );
  }

  renderUserMenu() {
    const { onSignOut } = this.props;

    return (
      <Content>
        {
          this.renderLogoWrap()
        }
        {
          this.renderMenuItems()
        }
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
      </Content>
    );
  }

  renderGuestMenu() {
    return (
      <Content>
        {
          this.renderLogoWrap()
        }
        <UserNav>
          <li>
            <Link to="/login">
              <ItemNavButton type="login">Sign In</ItemNavButton>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <ItemNavButton>Sign up</ItemNavButton>
            </Link>
          </li>
        </UserNav>
      </Content>);
  }

  render() {
    const { userReducer } = this.props;

    return (
      <Headroom>
        <Wrapper>
          {
            userReducer.Authentication ? this.renderUserMenu() : this.renderGuestMenu()
          }
        </Wrapper>
      </Headroom>
    );
  }
}

export default Header;
