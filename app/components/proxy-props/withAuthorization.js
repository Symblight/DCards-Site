import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchInit } from 'components/mainReducer/actions';

const mapDispatchToProps = (dispatch) => ({
  onInit: () => dispatch(fetchInit())
});

const mapStateToProps = (state) => ({
  config: state.reducerConfig
});

const withAuthorization = App => {
  @withRouter
  @connect(null, mapDispatchToProps)
  class Authorization extends Component {
    componentWillMount() {
      const { onInit } = this.props;

      if (onInit) {
        onInit();
      }
    }
    render() {
      const { config } = this.props;

      return <App config={config} />;
    }
  }
  return Authorization;
};

export default withAuthorization;