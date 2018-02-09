import React, { PureComponent } from 'react';

import { Button, Checkbox, Form } from 'semantic-ui-react';
import Label from 'ui/atoms/Label';
import { Redirect } from 'react-router-dom';
import { fetchLoginUser } from '../reducerUser/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginRequest: (user)=> dispatch(fetchLoginUser(user))
    }
  };
  
@connect(
    null,
    mapDispatchToProps
  )
class FormSignIn extends PureComponent {
    constructor(){
        super();
        this.state = {
            UsernameOrEmail: '',
            Password: ''
        }
    }

    handleSubmitButton = () => {
        this.props.onLoginRequest({data:{...this.state}});
    };

    handleChangeUsernameOrEmail = (event) => {
        const { onChange } = this.props;

        this.setState({ UsernameOrEmail: event.target.value });
    };

    handleChangePassword = (event) => {
        this.setState({ Password: event.target.value });
    };

    render(){
        const { UsernameOrEmail, Password } = this.state;
    
        return(
            <Form onSubmit={this.handleSubmitButton}>
                <Form.Field>
                    <Label color = 'white'>Username or email address</Label>
                    <input onChange = {this.handleChangeUsernameOrEmail} value = {UsernameOrEmail} placeholder='Username or email address' />
                </Form.Field>
                <Form.Field>
                    <Label color = 'white'>Password</Label>
                    <input onChange = {this.handleChangePassword} value = {Password} placeholder='Password' />
                </Form.Field>
                <Form.Button positive content="Sign in" />
            </Form>
        );
    }
}

export default FormSignIn;
