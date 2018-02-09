import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content,  UserNav } from './index.styled';
import { Menu } from 'semantic-ui-react'
import Button from 'ui/atoms/Button';

const AUTHENTICATION = false;

class Header extends Component {

  renderUserMenu() {
    return(
      <Content>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <UserNav>
        <li>
          <Link to="/account">
            <Button >Account</Button>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <Button inverted>Settings</Button>
          </Link>
        </li>
      </UserNav>
    </Content>);
  };

  renderGuestMenu() {
    return(
      <Content>
        <div>
          <Link to="/">Logo</Link>
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
    return (
      <Wrapper>
        {
          AUTHENTICATION ? this.renderUserMenu() : this.renderGuestMenu()
        }
      </Wrapper>
    );
  }
}

export default Header;
