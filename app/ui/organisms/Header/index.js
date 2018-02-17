import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Wrapper, Content,  UserNav, LogoWrap } from './index.styled';
import { Menu } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import Logo from 'ui/atoms/Logo';
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
  renderUserMenu() {
    const { onSignOut } = this.props;

    return (
      <Content>
        <LogoWrap>
          <Link to="/"><Logo /></Link>
          alpha
        </LogoWrap>
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
        <div>
          <Link to="/"><Logo /></Link>
        </div>
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
      <Wrapper>
        {
          userReducer.Authentication ? this.renderUserMenu() : this.renderGuestMenu()
        }
      </Wrapper>
    );
  }
}

export default Header;
