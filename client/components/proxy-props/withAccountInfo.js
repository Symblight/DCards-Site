import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchUserInfo } from 'components/Main/actions';

const USER_INFO = {
  firstname: 'Alexey',
  lastname: 'Tkachenko',
  email: 'symblight@gmail.com',
  password: '123456',
  cards: 3
};

const mapDispatchToProps = (dispatch) => ({
  onUserInfo: (data) => dispatch(fetchUserInfo(data))
});

const mapStateToProps = (state) => ({
  user: state.reducerMain.user
});

const withAccountInfo = (Component) => {
    @connect(mapStateToProps, mapDispatchToProps)
  class AccountInfo extends PureComponent {

      componentWillMount() {
        const { onUserInfo } = this.props;

        if (onUserInfo) {
          onUserInfo(USER_INFO);
        }
      }

      render() {
        const { user } = this.props;

        return (
          <Component data={user} {...this.props} />
        );
      }
    }

    return AccountInfo;
};

export default withAccountInfo;
