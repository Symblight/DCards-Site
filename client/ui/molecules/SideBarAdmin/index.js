import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SideBar from 'ui/atoms/SideBar';
import MenuItem from 'ui/atoms/MenuItemSideBar';

import { } from './index.styled';

class SideBarAdmin extends PureComponent {

    static propTypes = {
      title: PropTypes.string,
      className: PropTypes.string
    };

    handleSelectedItem = (event, name) => {
      const { onSelect } = this.props;

      if (onSelect) {
        onSelect(name);
      }
    };

    render() {
      const { title, children, className } = this.props;

      return (
        <SideBar className={className}>
          <MenuItem
            content="Редактировать инофрмацию о магазине"
            name="BaseInfo"
            onClick={this.handleSelectedItem}
          />
          <MenuItem
            content="Редактировать карты"
            name="EditCards"
            onClick={this.handleSelectedItem}
          />
          <MenuItem
            content="Администраторы"
            name="EditAdmins"
            onClick={this.handleSelectedItem}
          />
        </SideBar>
      );
    }
}

export default SideBarAdmin;
