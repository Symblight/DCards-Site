import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchLoginUser } from '../reducerUser/actions';
import AuthPage from 'ui/pages/AuthPage';
import MainPage from 'ui/pages/MainPage';
import FormSignIn from '../FormSignIn';
import FormSignUp from '../FormSignUp';

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginRequest: (user)=> dispatch(fetchLoginUser(user))
    }
};

const mapStateToProps = (state) => {
    return {
        userReducer: state.reducerLogin
    }
};
  
@connect(
    mapStateToProps,
    mapDispatchToProps
)

class Authentication extends PureComponent {

    handleSignIn = () => {
        console.log('SIGN IN');
    };

    handleSignUp = () => {
        console.log('SIGN UP');
    };

    renderMainPage() {
        const { userReducer } = this.props;
    
        return (
            <MainPage 
            />
        );
    };

    renderAuthPage() {
        const { userReducer } = this.props;

        return (
            <AuthPage 
                onSignIn = {this.handleSignIn}
                onSignUp = {this.handleSignUp}
            />
        );
    };

    render() {
        const { userReducer } = this.props;

        return (
            <div>
                {
                !userReducer.Authentication
                    ?
                        this.renderAuthPage() 
                    :
                        this.renderMainPage()
                }
            </div>
        );
    }
}

export default Authentication;