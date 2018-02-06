import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Wrapper, Content,  UserNav } from './index.styled';
import Button from 'ui/atoms/Button';

const AUTHENTICATION = false;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
            <div>
              <Link to="/main">Logo component </Link>
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
        </Content>
      </Wrapper>
    );
  }
}

export default Header;
