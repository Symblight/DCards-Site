import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderGuest from 'ui/organisms/HeaderGuest';
import HeaderUser from 'ui/organisms/HeaderUser';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
  userReducer: state.reducerLogin
});

@connect(mapStateToProps, null)
class Header extends PureComponent {
  render() {
    const { userReducer } = this.props;

    if (userReducer.Authentication) return <HeaderUser />;

    return <HeaderGuest />;
  }
}

export default Header;