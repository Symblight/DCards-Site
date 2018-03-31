import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FieldText from 'ui/molecules/FieldText';
import Menu from 'ui/molecules/Menu';

import { ContentWrap } from './index.styled';

class UserPasswordEdit extends PureComponent {
    static propTypes = {
      data: PropTypes.object,
      buttonsMenu: PropTypes.node,
      onChangePassword: PropTypes.func,
      onChangePasswordConf: PropTypes.func,
      onChangeCurrentPassword: PropTypes.func
    };

    render() {
      const {
        data,
        buttonsMenu,
        onChangePassword,
        onChangePasswordConf,
        onChangeCurrentPassword
      } = this.props;

      return (
        <Menu title="Изменить пароль">
          <ContentWrap>
            <FieldText
              title="Пароль:"
              edit={true}
              type="Password"
              name="newPassword"
              value={data.newPassword}
              onChange={onChangePassword}
            />
            <FieldText
              title="Подвердите пароль:"
              edit={true}
              type="Password"
              name="confPassword"
              value={data.confPassword}
              onChange={onChangePasswordConf}
            />
            <FieldText
              title="Текущий пароль:"
              edit={true}
              border={false}
              type="Password"
              value={data.currentPassword}
              name="currentPassword"
              onChange={onChangeCurrentPassword}
            />
          </ContentWrap>
          {buttonsMenu}
        </Menu>
      );
    }
}

export default UserPasswordEdit;