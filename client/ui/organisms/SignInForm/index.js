import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/molecules/PrimaryButton';
import Label from 'ui/atoms/Label';
import FormInput from 'ui/molecules/FormControlInput';
import FieldForm from 'ui/atoms/FieldForm';

import { Form, Control, WrapButtons, Wrapper } from './index.styled';

class SignInForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func,
    validation: PropTypes.object,
    onChangeLogin: PropTypes.func,
    onChangePassword: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      username: {
        value: '',
        valid: props.validation && props.validation.valid ? props.validation.valid : '',
        error: props.validation && props.validation.error ? props.validation.error : ''
      },
      password: {
        value: '',
        valid: props.validation && props.validation.valid ? props.validation.valid : '',
        error: props.validation && props.validation.error ? props.validation.error : ''
      }
    };
  }

  checkValidInputs = () => {
    const inputFirst = this.state.username;
    const inputSecond = this.state.password;

    const inputs = {
      inputFirst,
      inputSecond
    };

    if (!inputs.inputFirst.value) {
      inputFirst.valid = 'error';
      inputFirst.error = 'Не заполненно!';
    } else {
      inputFirst.valid = '';
      inputFirst.error = '';
    }

    if (!inputs.inputSecond.value) {
      inputSecond.valid = 'error';
      inputSecond.error = 'Не заполненно!';
    } else {
      inputSecond.valid = '';
      inputSecond.error = '';
    }

    this.setState({ inputs });
  }

  onSubmit = (event) => {
    const { onSubmit } = this.props;
    const { username, password } = this.state;

    event.preventDefault();

    this.checkValidInputs();

    if (!username.valid && !password.valid) {
      if (onSubmit) {
        onSubmit();
      }
    }
  };

  handleChangeInput = (event) => {
    const { onChangeLogin, onChangePassword } = this.props;

    const valueInput = event.target.value;
    const inputs = this.state;
    const field = event.target.name;

    inputs[field].value = valueInput;

    this.setState({ inputs });
  };

  render() {
    const { onSubmit } = this.props;

    return (
      <Wrapper>
        <Form onSubmit={this.onSubmit}>
          <FieldForm>
            <Label>Username or email</Label>
            <FormInput
              name="username"
              onChange={this.handleChangeInput}
              value={this.state.username.value}
              validation={this.state.username.valid}
              errorMessage={this.state.username.error}
            />
          </FieldForm>
          <FieldForm>
            <Label>Password</Label>
            <FormInput
              type="password"
              name="password"
              onChange={this.handleChangeInput}
              value={this.state.password.value}
              validation={this.state.password.valid}
              errorMessage={this.state.password.error}
            />
          </FieldForm>
          <Button type="submit">Войти</Button>
        </Form>
      </Wrapper>
    );
  }
}

export default SignInForm;