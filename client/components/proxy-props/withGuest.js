import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const MAIN_PAGE = '/';

const mapStateToProps = (state) => ({
  userReducer: state.reducerConfig
});

const withGuest = (Component) => {
    @connect(mapStateToProps, null)
  class GuestComponent extends PureComponent {

      renderRederict() {
        const { location } = this.props;

        const { from } = location && location.state || { from: { pathname: MAIN_PAGE } };

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
        const { Authentication } = this.props.userReducer;

        return Authentication ? this.renderRederict() : this.renderComponent();
      }
    }

    return GuestComponent;
};

export default withGuest;
