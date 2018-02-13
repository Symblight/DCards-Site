import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect }  from 'react-router-dom';

import MainPage from 'ui/pages/MainPage';

const mapStateToProps = (state) => {
    return {
        userReducer: state.reducerLogin
    }
};
  
@connect(
    mapStateToProps,
    null
)
class Main extends PureComponent {

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
                        <MainPage 
                            />
                }
            </div>
        );
    }
}

export default Main;