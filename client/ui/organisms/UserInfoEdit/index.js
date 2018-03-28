import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FieldText from 'ui/molecules/FieldText';
import ChooseAvatar from 'ui/organisms/ChooseAvatar';
import Menu from 'ui/molecules/Menu';

import { ContentWrap } from './index.styled';

class UserInfoEdit extends PureComponent {
    static propTypes = {
      data: PropTypes.object,
      buttonsMenu: PropTypes.node,
      onChange: PropTypes.func
    };

    onChange = (event) => {
      const { onChange } = this.props;

      if (onChange) {
        onChange(event);
      }
    };

    render() {
      const {
        data,
        buttonsMenu
      } = this.props;

      return (
        <Menu title="Редактировать данные">
          <ContentWrap>
            <ChooseAvatar />
            <FieldText
              title="Имя:"
              value={data.firstname}
              onChange={this.onChange}
              edit={true}
              name="firstname"
            />
            <FieldText
              title="Фамилия:"
              value={data.lastname}
              onChange={this.onChange}
              edit={true}
              name="lastname"
            />
            <FieldText
              title="Email:"
              value={data.email}
              onChange={this.onChange}
              edit={true}
              name="email"
            />
            <FieldText
              title="Текущий пароль:"
              onChange={this.onChange}
              value={data.password}
              edit={true}
              type="Password"
              name="password"
            />
          </ContentWrap>
          <div>
              Google account
          </div>
          {
                buttonsMenu
          }
        </Menu>
      );
    }
}

export default UserInfoEdit;