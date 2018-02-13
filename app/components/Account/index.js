import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect }  from 'react-router-dom';

import AccountPage from 'ui/pages/AccountPage';

const mapStateToProps = (state) => {
    return {
        userReducer: state.reducerLogin
    }
};
  
@connect(
    mapStateToProps,
    null
)
class Account extends PureComponent {

    renderRederict() {
        const { from } = this.props.location.state || { from: { pathname: "/login" } };
    
        return (
            <Redirect to={from} />
        );
    };

    render() {
        const { userReducer } = this.props;

        return (
            <div>
                {
                    !userReducer.Authentication
                        ?
                            this.renderRederict() 
                        :
                        <AccountPage 
                            />
                }
            </div>
        );
    }
}

export default Account;