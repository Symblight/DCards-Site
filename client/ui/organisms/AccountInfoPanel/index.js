import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FieldText from 'ui/molecules/FieldText';
import FieldPassword from 'ui/molecules/FieldPassword';
import Button from 'ui/molecules/ButtonWith';
import Menu from 'ui/molecules/Menu';
import UserInfoEdit from 'ui/organisms/UserInfoEdit';
import UserPasswordEdit from 'ui/organisms/UserPasswordEdit';
import _ from 'lodash';

import { Wrapper, ContentWrap, ButtonWrap, ButtonsMenu } from './index.styled';

class AccountInfoPanel extends PureComponent {
    static propTypes = {
      data: PropTypes.object,
      onSaveInfo: PropTypes.func
    };

    constructor(props) {
      super(props);

      this.state = {
        userInfo: {
          firstname: props.data ? props.data.firstname : '',
          lastname: props.data ? props.data.lastname : '',
          email: props.data ? props.data.email : '',
          password: props.data ? props.data.password : ''
        },
        password: {
          newPassword: '',
          confPassword: '',
          currentPassword: ''
        },
        mode: 'info'
      };
    }

    componentWillReceiveProps(nextProps) {
      this.setState({ userInfo: nextProps.data });
    }

    onClickPassword = () => {
      const { onChangePassword } = this.props;

      if (onChangePassword) {
        onChangePassword();
      }
    }

    handleClickEditInfo = () => {
      this.setState({ mode: 'editInfo' });
    };

    handleClickEditPassword = () => {
      this.setState({ mode: 'editPassword' });
    };

    handleClickCancel= () => {
      this.setState({ mode: 'info' });
    };

    handleChangeField = (event) => {
      let user = this.state.userInfo;

      const _userInfo = {
        ...user,
        [event.target.name]: event.target.value
      };

      this.setState({ userInfo: _userInfo });
    };

    handleChangePasswordField = (event) => {
      const field = event.target.name;
      const _password = this.state.password;

      const passwordField = {
        ..._password,
        [event.target.name]: event.target.value
      };

      this.setState({ password: passwordField });
    };

    handleSaveInfo = () => {
      const { onSaveInfo } = this.props;

      if (onSaveInfo) {
        onSaveInfo(this.state);
      }
    };

    renderEditInfo() {
      return (
        <UserInfoEdit
          data={this.state.userInfo}
          buttonsMenu={this.renderButtons()}
          onChange={this.handleChangeField}
        />
      );
    }

    renderPasswordEdit() {
      return (
        <UserPasswordEdit
          buttonsMenu={this.renderButtons()}
          onChangePassword={this.handleChangePasswordField}
          onChangePasswordConf={this.handleChangePasswordField}
          onChangeCurrentPassword={this.handleChangePasswordField}
          data={this.state.password}
        />
      );
    }

    renderButtons() {
      return (
        <ButtonsMenu>
          <Button onClick={this.handleSaveInfo}>Сохранить</Button>
          <Button onClick={this.handleClickCancel}>Отменить</Button>
        </ButtonsMenu>
      );
    }

    render() {
      const {
        data
      } = this.props;

      if (this.state.mode === 'editInfo') {
        return (
          this.renderEditInfo()
        );
      }

      if (this.state.mode === 'editPassword') {
        return (
          this.renderPasswordEdit()
        );
      }

      return (
        <Wrapper>
          <Menu>
            <ContentWrap>
              <FieldText
                title="Имя:"
                value={data.firstname}
              />
              <FieldText
                title="Фамилия:"
                value={data.lastname}
              />
              <FieldText
                title="Email:"
                value={data.email}
              />
              <FieldPassword
                title="Пароль:"
                value="123456789"
                onClick={this.handleClickEditPassword}
              />
            </ContentWrap>
            <ButtonWrap>
              <Button onClick={this.handleClickEditInfo}>Изменить профиль</Button>
            </ButtonWrap>
          </Menu>
        </Wrapper>
      );
    }
}

export default AccountInfoPanel;