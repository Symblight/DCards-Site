import React, { PureComponent } from 'react';

import { Button, Checkbox, Form } from 'semantic-ui-react';
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
class SignInForm extends PureComponent {
    constructor(){
        super();
        this.state = {

        }
    }

    handleSubmitButton = () => {
        this.props.onLoginRequest({data:{username:"lol"}});
       // console.log(this.props);
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
