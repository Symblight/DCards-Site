import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FieldText from 'ui/molecules/FieldText';
import FieldPassword from 'ui/molecules/FieldPassword';
import Button from 'ui/molecules/PrimaryButton';
import ChooseAvatar from 'ui/organisms/ChooseAvatar';
import Menu from 'ui/molecules/Menu';

import { Wrapper, ContentWrap, ButtonWrap, ButtonsMenu } from './index.styled';

class AccountInfoPanel extends PureComponent {
    static propTypes = {
      data: PropTypes.object,
      onChangePassword: PropTypes.func,
      onEditClick: PropTypes.func,
      edit: PropTypes.bool
    };

    constructor() {
      super();

      this.state = {
        mode: 'info'
      };
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

    renderEditInfo() {
      const {
        data, onChangePassword, onEditClick, edit
      } = this.props;

      return (
        <Menu title="Редактировать данные">
          <ContentWrap>
            <ChooseAvatar />
            <FieldText
              title="Имя:"
              value={data.firstname}
              edit={true}
            />
            <FieldText
              title="Фамилия:"
              value={data.lastname}
              edit={true}
            />
            <FieldText
              title="Email:"
              value={data.email}
              edit={true}
            />
            <FieldText
              title="Текущий пароль:"
              edit={true}
              type="Password"
            />
          </ContentWrap>
          <div>
            Google account
          </div>
          {
            this.renderButtons()
          }
        </Menu>
      );
    }

    renderPasswordEdit() {
      return (
        <Menu title="Изменить пароль">
          <ContentWrap>
            <FieldText
              title="Пароль:"
              edit={true}
              type="Password"
            />
            <FieldText
              title="Повторите пароль:"
              edit={true}
              type="Password"
            />
            <FieldText
              title="Текущий пароль:"
              edit={true}
              border={false}
              type="Password"
            />
          </ContentWrap>
          {
            this.renderButtons()
          }
        </Menu>
      );
    }

    renderButtons() {
      return (
        <ButtonsMenu>
          <Button>Сохранить</Button>
          <Button onClick={this.handleClickCancel}>Отменить</Button>
        </ButtonsMenu>
      );
    }

    render() {
      const {
        data, onChangePassword, edit
      } = this.props;

      if (this.state.mode === 'info') {
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
    }
}

export default AccountInfoPanel;