import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {  } from 'components/Main/actions';

const LIST_SHOPS= [
];

const mapStateToProps = (state) => {
    return {
       
    }
};

const withShops = (Component) => {
    @connect(null, null)
    class Shops extends PureComponent {

        componentWillMount = () => {

        }

        render() {
            const { shops } = this.props;

            return (
                <Component data = {shops} {...this.props} />
            );
        }
    }

    return Shops;
}

export default withShops;
