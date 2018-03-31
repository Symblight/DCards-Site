import React, { PureComponent } from 'react';
import { Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Label from 'ui/atoms/Label';
import { fetchLoginUser } from '../mainReducer/actions';

const mapStateToProps = (state) => ({
  userReducer: state.reducerConfig
});

const mapDispatchToProps = (dispatch) => ({
  onLoginRequest: (user) => dispatch(fetchLoginUser(user))
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class SignIn extends PureComponent {
  constructor() {
    super();
    this.state = {
      UsernameOrEmail: '',
      Password: ''
    };
  }

    handleSubmitButton = () => {
      this.props.onLoginRequest({ data: { ...this.state } });
    };

    handleChangeUsernameOrEmail = (event) => {

      this.setState({ UsernameOrEmail: event.target.value });
    };

    handleChangePassword = (event) => {
      this.setState({ Password: event.target.value });
    };

    renderForm() {
      const { UsernameOrEmail, Password } = this.state;
      return (
        <Form onSubmit={this.handleSubmitButton}>
          <Form.Field>
            <Label>Username or email address</Label>
            <input onChange={this.handleChangeUsernameOrEmail} value={UsernameOrEmail} placeholder="Username or email address" />
          </Form.Field>
          <Form.Field>
            <Label>Password</Label>
            <input onChange={this.handleChangePassword} value={Password} placeholder="Password" />
          </Form.Field>
          <Form.Button positive content="Sign in" />
        </Form>
      );
    }

    renderRederict() {
      const { location } = this.props;

      const { from } = location && location.state || { from: { pathname: '/main' } };

      return (
        <Redirect to={from} />
      );
    }

    render() {
      const { Authentication } = this.props.userReducer;

      return (
        <div>
          {
                Authentication ? this.renderRederict() : this.renderForm()
            }
        </div>
      );
    }
}

export default SignIn;
