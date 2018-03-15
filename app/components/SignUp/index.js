import React, { PureComponent } from 'react';
import { Form } from 'semantic-ui-react';

import Label from 'ui/atoms/Label';
import withGuest from '../proxy-props/withGuest';

@withGuest
class FormSignUp extends PureComponent {
  render() {
    return (
      <Form onSubmit={this.handleSubmitButton}>
        <Form.Field>
          <Label>Username</Label>
          <input placeholder="Username" />
        </Form.Field>
        <Form.Field>
          <Label>First name</Label>
          <input placeholder="First name" />
        </Form.Field>
        <Form.Field>
          <Label>Email</Label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <Label>Password</Label>
          <input placeholder="Password" />
        </Form.Field>
        <Form.Button positive content="Sign up" />
      </Form>
    );
  }
}

export default FormSignUp;
