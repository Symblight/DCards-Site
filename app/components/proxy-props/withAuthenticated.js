import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const LOGIN_PAGE = '/';

const mapStateToProps = (state) => ({
  userReducer: state.reducerConfig
});

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
      }

      renderComponent() {
        return (
          <Component {...this.props} />
        );
      }

      render() {
        const { userReducer } = this.props;

        return !userReducer.Authentication ? this.renderRederict() : this.renderComponent();

      }
    }

    return Authenticated;
};

export default withAuthenticated;
