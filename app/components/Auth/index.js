import React, { PureComponent } from 'react';

import AuthPage from 'ui/pages/AuthPage';
import FormSignIn from '../FormSignIn';
import FormSignUp from '../FormSignUp';

class Authentication extends PureComponent {
    render() {
        return (
            <div>
                <AuthPage />
            </div>
        );
    }
}

export default Authentication;