import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Wrapper, Content,  UserNav } from './index.styled';
import { Menu } from 'semantic-ui-react'
import Button from 'ui/atoms/Button';
import Logo from 'ui/atoms/Logo';

const AUTHENTICATION = false;

class Header extends Component {

  static propTypes = {
    auth: PropTypes.bool
  };

  renderUserMenu() {
    return (
      <Content>
        <div>
          <Link to="/"><Logo /></Link>
        </div>
        <UserNav>
          <li>
            <Link to="/account">
              <Button >Account</Button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Button inverted>Sign out</Button>
            </Link>
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
    const { auth } = this.props;

    return (
      <Wrapper>
        {
          auth ? this.renderUserMenu() : this.renderGuestMenu()
        }
      </Wrapper>
    );
  }
}

export default Header;
