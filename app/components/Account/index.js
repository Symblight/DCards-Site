import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect }  from 'react-router-dom';

import AccountPage from 'ui/pages/AccountPage';
import withAuthenticated from '../proxy-props/withAuthenticated';
  
@withAuthenticated
class Account extends PureComponent {

    render() {
        const { userReducer } = this.props;

        return (
            <AccountPage 
            />
        );
    }
}

export default Account;