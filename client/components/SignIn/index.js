import React, { PureComponent } from 'react';
import { Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SignInPage from 'ui/pages/SignInPage';

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

      console.log(this.state);
    };

    handleChangeUsernameOrEmail = (event) => {

      this.setState({ UsernameOrEmail: event.target.value });
    };

    handleChangePassword = (event) => {
      this.setState({ Password: event.target.value });
    };

    render() {
      const { Authentication } = this.props.userReducer;

      return (
        <SignInPage
          onChangeLogin={this.handleChangeUsernameOrEmail}
          onChangePassword={this.handleChangePassword}
          onSubmit={this.handleSubmitButton}
        />
      );
    }
}

export default SignIn;
