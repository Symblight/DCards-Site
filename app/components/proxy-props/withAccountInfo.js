import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchUserInfo } from 'components/Main/actions';

const USER_INFO = {
    firstname: 'Alexey',
    lastname: 'Tkachenko',
    cards: 3
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUserInfo: (data) => dispatch(fetchUserInfo(data))
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.reducerMain.user
    }
};

const withAccountInfo = (Component) => {
    @connect(mapStateToProps, mapDispatchToProps)
    class AccountInfo extends PureComponent {

        componentWillMount() {
            const { onUserInfo, user } = this.props;

            if(onUserInfo) {
               onUserInfo(USER_INFO);
            }
        }

        render() {
            const { user } = this.props;
    
            return (
                <Component data = { user } { ...this.props } />
            );
        }
    }

    return AccountInfo;
}

export default withAccountInfo;