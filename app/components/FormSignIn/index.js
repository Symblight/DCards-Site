import React, { Component } from 'react';

import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class SignInForm extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    handleSubmitButton = () => {
        console.log(this.props);
    };

    render(){
        return(
            <Form onSubmit={this.handleSubmitButton}>
                <Form.Field>
                    <label>Username or email address</label>
                    <input placeholder='Username or email address' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' />
                </Form.Field>
                <Form.Button content="Sign in" />
            </Form>
        );
    }
}

export default SignInForm;
