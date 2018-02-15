import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import MainPage from 'ui/pages/MainPage';
import withAuthenticated from '../proxy-props/withAuthenticated';

@withAuthenticated
class Main extends PureComponent {

    handleSignOut = () => {
        console.log('Sign out');
    }
    render() {
        return (
            <MainPage 
            />
        );
    }
}

export default Main;