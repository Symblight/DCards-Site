import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'ui/molecules/PrimaryButton';
import InputForm from 'ui/molecules/InputForm';
import Label from 'ui/atoms/Label';

import { Form, Control, WrapButtons } from './index.styled';

class SignInForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  render() {
    const { onSubmit } = this.props;

    return (
      <Form>
        <Control>
          <Label>Username or email address</Label>
          <InputForm />
        </Control>
        <Control>
          <Label>Password</Label>
          <InputForm />
        </Control>
        <WrapButtons>
          <Button onClick={onSubmit}>Войти</Button>
        </WrapButtons>
      </Form>
    );
  }
}

export default SignInForm;