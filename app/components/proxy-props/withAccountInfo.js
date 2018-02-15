import React, { PureComponent } from 'react';

const USER_INFO = {
    firstname: 'Alexey',
    lastname: 'Tkachenko',
    cards: 3
};

const withAccountInfo = (Component) => {
    class AccountInfo extends PureComponent {
        render() {
            return (
                <Component data = { USER_INFO } { ...this.props } />
            );
        }
    }

    return AccountInfo;
}

export default withAccountInfo;