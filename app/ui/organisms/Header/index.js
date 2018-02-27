import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';

import { Wrapper, Content,  UserNav, LogoWrap, HeaderText, TextName } from './index.styled';
import { Menu } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import LogoSVG from 'assets/images/react.svg';
import { signOut } from 'components/reducerUser/actions';

const mapStateToProps = (state) => {
  return {
      userReducer: state.reducerLogin
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignOut: () => dispatch(signOut())
  }
};

@connect(mapStateToProps, mapDispatchToProps)
class Header extends PureComponent {

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
  };

  renderUserMenu() {
    const { onSignOut } = this.props;

    return (
      <Content>
        {
          this.renderLogoWrap()
        }
        {/*<span>Shops</span>*/}
        <UserNav>
          <li>
            <Link to="/account">
              <Button>Account</Button>
            </Link>
          </li>
          <li>
              <Button inverted onClick = { onSignOut }>Sign out</Button>
          </li>
        </UserNav>
      </Content>
    );
  };

  renderGuestMenu() {
    return (
      <Content>
        {
          this.renderLogoWrap()
        }
        <UserNav>
          <li>
            <Link to="/login">
              <Button color='blue'>Sign In</Button>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <Button inverted>Sign Up</Button>
            </Link>
          </li>
        </UserNav>
      </Content>);
  };

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
