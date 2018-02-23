import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {  } from 'components/Main/actions';

const withDisctountCard = (Component) => {
    class DiscountCard extends PureComponent {
        
        render() {
            return (
                <Component {...this.props} /> 
            );
        }
    }
    return DiscountCard;
}

export default withDisctountCard;