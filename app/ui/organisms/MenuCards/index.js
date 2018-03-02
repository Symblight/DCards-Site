import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './index.styled.js'

class MenuCards extends PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <Wrapper>
                <ul>
                    <li>Title</li>
                    <li>Count cards</li>
                    <li>Filters</li>
                    <li>Button create</li>
                </ul>
            </Wrapper>
        );
    }
}


export default MenuCards;