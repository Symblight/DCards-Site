import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';

import { Menu } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import LogoSVG from 'assets/images/react.svg';
import TextButton from 'ui/molecules/TextButton';
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

  renderMenuItems() {
    return(
      <ButtonsContent>
        <Link to="/shops">
          <ItemNavButton>Shops</ItemNavButton>
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
  };

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
        <Link to="/account">
          <Button>Alexey</Button>
        </Link>
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
              <ItemNavButton type='login'>Sign In</ItemNavButton>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <ItemNavButton>Sign up</ItemNavButton>
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
