import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Menu from 'ui/molecules/Menu';
import MenuItem from 'ui/molecules/MenuItem';

import { } from './index.styled';

class MenuAdminShop extends PureComponent {
  state = {
    activeItem: ''
  };

  handleSelectedItem = (event, name) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu title="Меню">
        <MenuItem
          name="item1"
          onClick={this.handleSelectedItem}
          content="Edit info shop"
          active={activeItem === 'item1'}
        />
        <MenuItem
          name="item2"
          onClick={this.handleSelectedItem}
          content="Edit type card"
          active={activeItem === 'item2'}
        />
        <MenuItem
          name="item3"
          onClick={this.handleSelectedItem}
          content="Edit card"
          active={activeItem === 'item3'}
        />
      </Menu>
    );
  }
}

export default MenuAdminShop;