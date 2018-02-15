import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Redirect }  from 'react-router-dom';
import { connect } from 'react-redux';

const GUEST_ROUTERS = ['/login', '/', 'signout'];
const MAIN_PAGE = '/main';
const LOGIN_PAGE = '/';

const mapStateToProps = (state) => {
    return {
        userReducer: state.reducerLogin
    }
};

const withAuthenticated = (Component) => {
    @connect(mapStateToProps, null)
    class Authenticated extends PureComponent {
        constructor() {
            super();
            this.state = {
                pathname: LOGIN_PAGE
            };
        }

        renderRederict() {
            const { location } = this.props;

            const { from } = location && location.state || { from: { pathname: this.state.pathname } };
        
            return (
                <Redirect to={from} />
            );
        };

        renderComponent() {
            return (
                <Component {...this.props}/>
            );
        };
        
        render() {
            const { userReducer } = this.props;

            return !userReducer.Authentication ? this.renderRederict() : this.renderComponent();
            
        }
    }

    return Authenticated;
}

export default withAuthenticated;