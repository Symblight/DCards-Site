import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { requestInit } from 'components/mainReducer/actions';

const mapDispatchToProps = (dispatch) => ({
  onInit: () => dispatch(requestInit())
});

const mapStateToProps = (state) => ({
  config: state.reducerConfig
});

const withAuthorization = App => {
  @connect(mapStateToProps, mapDispatchToProps)
  class Authorization extends Component {
    componentWillMount() {
      const { onInit } = this.props;

      if (onInit) {
        onInit();
      }
    }
    render() {
      const { config } = this.props;

      return <App config={config} {...this.props} />;
    }
  }
  return Authorization;
};

export default withAuthorization;