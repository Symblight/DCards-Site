import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderGuest from 'ui/organisms/HeaderGuest';
import HeaderUser from 'ui/organisms/HeaderUser';

import { signOut } from '../mainReducer/actions';

const mapDispatchToProps = (dispatch) => ({
  onSignOut: () => dispatch(signOut())
});

const mapStateToProps = (state) => ({
  userReducer: state.reducerConfig
});

@connect(mapStateToProps, mapDispatchToProps)
class Header extends PureComponent {

  handleSignOut = () => {
    const { onSignOut } = this.props;

    if (onSignOut) {
      onSignOut();
    }
  }

  render() {
    const { userReducer } = this.props;

    if (userReducer.Authentication) return <HeaderUser onSignOut={this.handleSignOut} />;

    return <HeaderGuest />;
  }
}

export default Header;