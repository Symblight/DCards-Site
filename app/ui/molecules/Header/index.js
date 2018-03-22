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

import {
  Wrapper,
  Content,
  LogoWrap,
  HeaderText,
  TextName
} from './index.styled';

const NAME_HEADER = 'DiCards';
const VERSION = 'alpha';

class Header extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  renderLogoWrap() {
    return (
      <LogoWrap>
        <Link to="/"><LogoSVG width={50} height={50} /></Link>
        <HeaderText>
          <span>{VERSION}</span>
          <TextName>{NAME_HEADER}</TextName>
        </HeaderText>
      </LogoWrap>
    );
  }

  render() {
    const { children } = this.props;

    return (
      <Headroom>
        <Wrapper>
          <Content>
            {this.renderLogoWrap()}
            {children}
          </Content>
        </Wrapper>
      </Headroom>
    );
  }
}

export default Header;
