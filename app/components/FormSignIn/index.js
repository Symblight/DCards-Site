import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class SignInForm extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    componentWillMount(){
        console.log('DID');
    }

    handleSubmitButton = () => {
        alert('it works!');
        console.log("2434343")
       // event.preventDefault();
    };

    render(){
        console.log('I was triggered during render')
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
