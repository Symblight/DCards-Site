import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect }  from 'react-router-dom';

import { fetchLoginUser } from '../reducerUser/actions';
import AuthPage from 'ui/pages/AuthPage';
import MainPage from '../Main';
import FormSignIn from '../SignIn';
import FormSignUp from '../SignUp';

class Authentication extends PureComponent {

    handleSignIn = () => {
        console.log('SIGN IN');
    };

    handleSignUp = () => {
        console.log('SIGN UP');
    };

    render() {

        return (
            <AuthPage 
                onSignIn = {this.handleSignIn}
                onSignUp = {this.handleSignUp}
            />
        );
    }
}

export default Authentication;